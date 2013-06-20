var panel = new jsgl.Panel(document.getElementById("panel"));

var PFLabel = panel.createLabel();
PFLabel.setText("PathFinder");
PFLabel.setFontSize(26);
PFLabel.setBold(true);
PFLabel.setItalics(true);
PFLabel.setLocationXY(100,500);
panel.addElement(PFLabel);

var authorLabel = panel.createLabel();
authorLabel.setText("JSGL.org");
authorLabel.setFontColor("#333");
authorLabel.setFontSize(16);
authorLabel.setBold(true);
authorLabel.setLocationXY(100,530);
panel.addElement(authorLabel);

NodeStates = { FRESH : 0, OPEN : 1, CLOSED : 2, FOUND : 3 };

function City(panel,inputObj)
{
  this.id=inputObj.id;

  this.location=new jsgl.Vector2D(20 + 10*inputObj.x, 20 + 10*inputObj.y);

  this.group=panel.createGroup();
  this.group.setLocation(this.location);
  this.group.setZIndex(3);

  this.circle=panel.createCircle();
  this.circle.setCenterLocationXY(0,0);
  this.circle.getStroke().setColor("black");
  this.radius=Math.log(10+inputObj.population)/2;
  this.circle.setRadius(this.radius);
  this.group.addElement(this.circle);
  
  this.label=panel.createLabel();
  this.label.setLocationXY(-10,-10);
  this.label.setText(inputObj.id);
  this.label.setBold(true);
  this.label.setLocationXY(this.radius+2,-this.radius-2);
  //this.label.setFontColor("navy");
  this.label.setFontSize(12);
  this.label.setZIndex(1);
  this.group.addElement(this.label);
  
  this.roads=new jsgl.util.ArrayList();
  this.setState(NodeStates.FRESH);
}

City.prototype.setState=function(state)
{
  this.state=state;
  
  switch(this.state)
  {
    case NodeStates.FRESH:
      this.circle.getFill().setColor("rgb("+Math.round((10-this.radius)*70)+","+Math.round((10-this.radius)*60)+","+Math.round((10-this.radius)*40)+")");
      break;
    case NodeStates.OPEN:
      this.circle.getFill().setColor("#69f");
      break;
    case NodeStates.CLOSED:
      this.circle.getFill().setColor("gray");
      break;
    case NodeStates.FOUND:
      this.circle.getFill().setColor("red");
      break;
  }
}

City.prototype.getState=function()
{
  return this.state;
}

City.prototype.getGraphicsElement=function()
{
  return this.group;
}

City.prototype.getRadius=function()
{
  return this.radius;
}

City.prototype.getLocation=function()
{
  return this.location;
}

City.prototype.getX=function()
{
  return this.location.X;
}

City.prototype.getY=function()
{
  return this.location.Y;
}

City.prototype.getID=function()
{
 return this.id;
}

City.prototype.addRoad=function(road)
{
  this.roads.add(road);
}

City.prototype.getNeighbors=function()
{
  var roadsCount=this.roads.getCount(),
      neighbors=new Array(roadsCount),
      road;
  
  for(var i=0; i<roadsCount; i++)
  {
    road=this.roads.get(i);
    if(road.getCity1()==this)
    {
      neighbors[i]=road.getCity2();
    }
    else
    {
      neighbors[i]=road.getCity1();
    }
  }
  
  return neighbors;
}

City.prototype.setDistance=function(dist)
{
  this.distance=dist;
  
//  document.getElementById("log").innerHTML+="dist(" + this.id + ") = " + dist + "<br/>"
}

City.prototype.getDistance=function()
{
  return this.distance;
}

City.prototype.getRoadTo=function(city2)
{
  var roadsCount = this.roads.getCount(), road;
  
  for(var i=0; i<roadsCount; i++)
  {
    road=this.roads.get(i);
    if((road.getCity1()==city2) || (road.getCity2()==city2)) return road;
  }
  
  return null;
}

function Road(panel,city1,city2,speed)
{
  this.city1=city1;
  this.city2=city2;
  this.speed=speed;
  
  this.line=panel.createLine();
  this.line.setStartPoint(this.city1.getLocation());
  this.line.setEndPoint(this.city2.getLocation());
  this.line.setZIndex(1);
}

Road.prototype.getGraphicsElement=function()
{
  return this.line;
}

Road.prototype.getCity1=function()
{
  return this.city1;
}

Road.prototype.getCity2=function()
{
  return this.city2;
}

Road.prototype.setWidth=function(width)
{
  this.line.getStroke().setWeight(width);
}

Road.prototype.setColor=function(color)
{
  this.line.getStroke().setColor(color);
}

Road.prototype.setDashStyle=function(dashStyle)
{
  this.line.getStroke().setDashStyle(dashStyle);
}

Road.prototype.setOpacity=function(opacity)
{
  this.line.getStroke().setOpacity(opacity);
}

Road.prototype.getSpeed=function()
{
  return this.speed;
}

cities = {};

for(var i=0; i<inputDataObj.cities.length; i++)
{
  var city=new City(panel,inputDataObj.cities[i]);
  cities[inputDataObj.cities[i].id]=city;
  panel.addElement(city.getGraphicsElement());
}

roads = new jsgl.util.ArrayList();

for(var i=0; i<inputDataObj.roads.length; i++)
{
  var city1=cities[inputDataObj.roads[i].from],
      city2=cities[inputDataObj.roads[i].to],
      speed=inputDataObj.roads[i].speed;
  
  var road=new Road(panel,city1,city2,speed);
  road.setWidth(Math.log(speed-50)/2);
  road.setDashStyle(jsgl.DashStyles.DASH);
  //road.setOpacity(0.5);
  
  city1.addRoad(road);
  city2.addRoad(road);
  
  if(inputDataObj.roads[i].speed>60)
  {
    if(inputDataObj.roads[i].speed>90)
    {
      road.setColor("red");
    }
    else
    {
      road.setColor("green");
    }
  }
  else
  {
    road.setColor("black");
  }
  
  roads.add(road);
  panel.addElement(road.getGraphicsElement());
}

function PathTree(panel,rootCity)
{
  this.panel=panel;
  this.group=panel.createGroup();
  this.group.setZIndex(0);

  this.searchStroke=new jsgl.stroke.SolidStroke();
  this.searchStroke.setColor("blue");
  this.searchStroke.setWeight(5);
  this.searchStroke.setOpacity(0.2);

  this.foundStroke=new jsgl.stroke.SolidStroke();
  this.foundStroke.setColor("#fc0");
  this.foundStroke.setOpacity(1);
  this.foundStroke.setWeight(10);

  this.usedEdgeStroke=new jsgl.stroke.SolidStroke();
  this.usedEdgeStroke.setColor("blue");
  this.usedEdgeStroke.setOpacity(0.6);
  this.usedEdgeStroke.setWeight(5);
  
  this.cities=[];
  this.rootCity={ city: rootCity, followers: [] };
  this.cities[rootCity.getID()]=this.rootCity;
}

PathTree.prototype.addEdge=function(from,to)
{
  this.cities[to.getID()]={ city: to, from: this.cities[from.getID()], followers: []}
  var cityNode=this.cities[to.getID()];
  this.cities[from.getID()].followers.push(cityNode);
  
  cityNode.line=panel.createLine();
  cityNode.line.setStroke(this.searchStroke);
  cityNode.line.setStartPointXY(from.getX(),from.getY());
  cityNode.line.setEndPointXY(to.getX(),to.getY());
  
  this.group.addElement(cityNode.line);
}

PathTree.prototype.visit=function(city)
{
  if(city!=this.rootCity.city) this.cities[city.getID()].line.setStroke(this.usedEdgeStroke);
}

PathTree.prototype.setFound=function(city)
{
  var cityNode=this.cities[city.getID()];
  
  
  while(cityNode!=this.rootCity)
  {
    cityNode.line.setStroke(this.foundStroke);
    cityNode.line.setZIndex(1);
    cityNode=cityNode.from;
  }
}

PathTree.prototype.getGraphicsElement=function()
{
  return this.group;
}

//-- algoritma BFS
function BFS()
{
  thisFnc=arguments.callee;
  
  if(!thisFnc.queue)
  {
    /* init */
    thisFnc.queue=new jsgl.util.Queue();
    
    for(var cityID in cities)
    {
      if(!isNaN(cityID*1)) {
          cities[cityID].setState(NodeStates.FRESH);
          //document.write('tes');
      }
    }
    cities[thisFnc.startID].setState(NodeStates.OPEN);
    thisFnc.queue.enqueue(cities[thisFnc.startID]);
    
    thisFnc.bfsTree=new PathTree(panel,cities[thisFnc.startID]);
//    thisFnc.found=false;
    panel.addElement(thisFnc.bfsTree.getGraphicsElement());
    setTimeout(thisFnc,500);
  }
  else
  {
    var node = thisFnc.queue.dequeue();

    thisFnc.bfsTree.visit(node);
 
    if(node.getID()!=thisFnc.endID)
    {
      var neighbors = node.getNeighbors(),
          neighbor;

      for(var i=0; i<neighbors.length; i++)
      {
        neighbor = neighbors[i];

        /*if(neighbor.getID()==thisFnc.endID)
        {
          thisFnc.bfsTree.addEdge(node,neighbor);
          neighbor.setState(NodeStates.FOUND);
          cities[thisFnc.startID].setState(NodeStates.FOUND);
          thisFnc.found=true;
          thisFnc.bfsTree.setFound(neighbor);
        }
        else*/
        {
          if(neighbor.getState()==NodeStates.FRESH)
          {
            neighbor.setState(NodeStates.OPEN);
            thisFnc.bfsTree.addEdge(node,neighbor);
            thisFnc.queue.enqueue(neighbor);
          }
        }
      }

/*      if(!thisFnc.found)
      {
*/        setTimeout(thisFnc,200)
/*      }
      else
      {
        if(thisFnc.finishHandler) thisFnc.finishHandler();
      }*/
    }
    else
    {
      thisFnc.bfsTree.setFound(node);
      if(thisFnc.finishHandler) thisFnc.finishHandler();
    }

    if(node.getID()==thisFnc.startID || node.getID()==thisFnc.endID)
    {
      node.setState(NodeStates.FOUND);
    }
    else
    {
      node.setState(NodeStates.CLOSED);
    }
  }
}

BFS.cleanup=function()
{
  BFS.queue=null;
  if(BFS.bfsTree)
  {
    panel.removeElement(BFS.bfsTree.getGraphicsElement());
  }
}
//-- end algortima BFS --//

//-- algoritma DFS --//
function DFS()
{
  thisFnc = arguments.callee;
  
  if(!thisFnc.stack)
  {
    /* init */
    thisFnc.stack=[];
    for(var cityID in cities)
    {
      if(!isNaN(cityID*1)) cities[cityID].setState(NodeStates.FRESH);
    }
    cities[thisFnc.startID].setState(NodeStates.OPEN);
    thisFnc.stack.push(cities[thisFnc.startID]);

    thisFnc.dfsTree=new PathTree(panel,cities[thisFnc.startID]);
    panel.addElement(thisFnc.dfsTree.getGraphicsElement());

    setTimeout(thisFnc,500);
  }
  else
  {
    var node = thisFnc.stack.pop();

    thisFnc.dfsTree.visit(node);
 
    if(node.getID()!=thisFnc.endID)
    {
      var neighbors = node.getNeighbors(),
          neighbor;
      
      for(var i=0; i<neighbors.length; i++)
      {
        neighbor = neighbors[i];

        if(neighbor.getState()==NodeStates.FRESH)
        {
          neighbor.setState(NodeStates.OPEN);
          thisFnc.dfsTree.addEdge(node,neighbor);
          thisFnc.stack.push(neighbor);
        }
      }

      setTimeout(thisFnc,500)
    }
    else
    {
      thisFnc.dfsTree.setFound(node);
      if(thisFnc.finishHandler) thisFnc.finishHandler();
    }

    if(node.getID()==thisFnc.startID || node.getID()==thisFnc.endID)
    {
      node.setState(NodeStates.FOUND);
    }
    else
    {
      node.setState(NodeStates.CLOSED);
    }
  }
}

DFS.cleanup=function()
{
  DFS.stack=null;

  if(DFS.dfsTree)
  {
    panel.removeElement(DFS.dfsTree.getGraphicsElement());
  }
}
//-- end algoritma DFS --//

//-- algoritma Greedy --//
function GreedySearch()
{
  thisFnc=arguments.callee;
  
  if(!thisFnc.queueArray)
  {
    /* init */
    thisFnc.queueArray=[];
    
    for(var cityID in cities)
    {
      if(!isNaN(cityID*1)) cities[cityID].setState(NodeStates.FRESH);
    }
    cities[thisFnc.startID].setState(NodeStates.OPEN);
    thisFnc.queueArray.push({city: cities[thisFnc.startID]});
    
    thisFnc.searchTree=new PathTree(panel,cities[thisFnc.startID]);
    panel.addElement(thisFnc.searchTree.getGraphicsElement());
    setTimeout(thisFnc,500);
  }
  else
  {
    var bestIndex=0;
    
    if(thisFnc.queueArray.length!=1)
    {
      var bestValue=thisFnc.heuristic(thisFnc.queueArray[0].from,thisFnc.queueArray[0].city,cities[thisFnc.endID]);
    
      for(var i=1; i<thisFnc.queueArray.length; i++)
      {
        if(thisFnc.heuristic(thisFnc.queueArray[i].from,thisFnc.queueArray[i].city,cities[thisFnc.endID])<bestValue)
        {
          bestValue=thisFnc.heuristic(thisFnc.queueArray[i].from,thisFnc.queueArray[i].city,cities[thisFnc.endID]);
          bestIndex=i;
        }
      }
    }
    
    var node = thisFnc.queueArray[bestIndex].city;
    
    for(var i=bestIndex; i<thisFnc.queueArray.length-1; i++)
    {
      thisFnc.queueArray[i] = thisFnc.queueArray[i+1];
    }
    thisFnc.queueArray.pop();

    thisFnc.searchTree.visit(node);
 
    if(node.getID()!=thisFnc.endID)
    {
      var neighbors = node.getNeighbors(),
          neighbor;

      for(var i=0; i<neighbors.length; i++)
      {
        neighbor = neighbors[i];

        if(neighbor.getState()==NodeStates.FRESH)
        {
          neighbor.setState(NodeStates.OPEN);
          thisFnc.searchTree.addEdge(node,neighbor);
          thisFnc.queueArray.push({city: neighbor, from: node});
        }
      }

      setTimeout(thisFnc,100)
    }
    else
    {
      thisFnc.searchTree.setFound(node);
      if(thisFnc.finishHandler) thisFnc.finishHandler();
    }

    if(node.getID()==thisFnc.startID || node.getID()==thisFnc.endID)
    {
      node.setState(NodeStates.FOUND);
    }
    else
    {
      node.setState(NodeStates.CLOSED);
    }
  }
}

GreedySearch.cleanup=function()
{
  GreedySearch.queueArray=null;
  if(GreedySearch.searchTree)
  {
    panel.removeElement(GreedySearch.searchTree.getGraphicsElement());
  }
}
//-- end algoritma Greedy --//

//-- algoritma A* --//
function AStar()
{
  thisFnc=arguments.callee;
  
  if(!thisFnc.queueArray)
  {
    /* init */
    thisFnc.queueArray=[];
    
    for(var cityID in cities)
    {
      if(!isNaN(cityID*1))
      {
        cities[cityID].setState(NodeStates.FRESH);
        cities[cityID].setDistance(Number.POSITIVE_INFINITY);
      }
    }
    cities[thisFnc.startID].setState(NodeStates.OPEN);
    cities[thisFnc.startID].setDistance(0);
    thisFnc.queueArray.push({city: cities[thisFnc.startID]});
    
    thisFnc.searchTree=new PathTree(panel,cities[thisFnc.startID]);
//    thisFnc.found=false;
    panel.addElement(thisFnc.searchTree.getGraphicsElement());
    setTimeout(thisFnc,200);
  }
  else
  {
    var bestIndex=0, heuristicValue;
    
    if(thisFnc.queueArray.length!=1)
    {
      var bestValue=thisFnc.hHeuristic(thisFnc.queueArray[0].from,thisFnc.queueArray[0].city,cities[thisFnc.endID])
        + thisFnc.pHeuristic(thisFnc.queueArray[0].from,thisFnc.queueArray[0].city);
    
      for(var i=1; i<thisFnc.queueArray.length; i++)
      {
        heuristicValue = thisFnc.hHeuristic(thisFnc.queueArray[i].from,thisFnc.queueArray[i].city,cities[thisFnc.endID])
            + thisFnc.pHeuristic(thisFnc.queueArray[i].from,thisFnc.queueArray[i].city);
        
        if(heuristicValue<bestValue)
        {
          bestValue=heuristicValue;
          bestIndex=i;
        }
      }
    }
    
    var node = thisFnc.queueArray[bestIndex].city;
    
    for(var i=bestIndex; i<thisFnc.queueArray.length-1; i++)
    {
      thisFnc.queueArray[i] = thisFnc.queueArray[i+1];
    }
    thisFnc.queueArray.pop();

    thisFnc.searchTree.visit(node);
 
    if(node.getID()!=thisFnc.endID)
    {
      var neighbors = node.getNeighbors(),
          neighbor,
          neighborDistance;

      for(var i=0; i<neighbors.length; i++)
      {
        neighbor = neighbors[i];

        if(neighbor.getState()==NodeStates.FRESH)
        {
          neighbor.setState(NodeStates.OPEN);
          thisFnc.searchTree.addEdge(node,neighbor);
          neighbor.setDistance(thisFnc.pHeuristic(node, neighbor));
          thisFnc.queueArray.push({city: neighbor, from: node });
        }
        else if(neighbor.getDistance() > thisFnc.pHeuristic(node, neighbor))
        {
          thisFnc.searchTree.addEdge(node,neighbor);
          neighbor.setDistance(thisFnc.pHeuristic(node, neighbor));

          if(neighbor.getState()!=NodeStates.OPEN)
          {
            neighbor.setState(NodeStates.OPEN);
            thisFnc.queueArray.push({ city: neighbor, from: node});
          }
          else
          {
            for(var j=0; j<thisFnc.queueArray.length; j++)
            {
              if(thisFnc.queueArray[j].city == neighbor)
              {
                thisFnc.queueArray[j].from = node;
                break;
              }
            }
          }
        }
      }

      setTimeout(thisFnc,100)
    }
    else
    {
      thisFnc.searchTree.setFound(node);
      if(thisFnc.finishHandler) thisFnc.finishHandler();
    }

    if(node.getID()==thisFnc.startID || node.getID()==thisFnc.endID)
    {
      node.setState(NodeStates.FOUND);
    }
    else
    {
      node.setState(NodeStates.CLOSED);
    }
  }
}

AStar.cleanup=function()
{
  AStar.queueArray=null;
  if(AStar.searchTree)
  {
    panel.removeElement(AStar.searchTree.getGraphicsElement());
  }
}
//-- end algoritma A* --//