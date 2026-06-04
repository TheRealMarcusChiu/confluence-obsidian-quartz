---
title: "Facade Pattern"
created: 2020-10-20T15:19:37.132-05:00
modified: 2026-01-10T16:30:38.985-06:00
parent: "[[Wrapper Patterns]]"
children: []
---
###### Facade Pattern
````excerpt
- is a type of [[Structural Design Patterns|structural design pattern]] that provides a simplified interface to a complex subsystem
````
^excerpt

# Real-World Example

> [!expand-ui]- Goldmine Example
> How does a goldmine work? "Well, the miners go down there and dig gold!" you say. That is what you believe because you are using a simple interface that goldmine provides on the outside, internally it has to do a lot of stuff to make it happen. This simple interface to the complex subsystem is a facade.

> [!expand-ui]- Customer-Service Example
> Consumers encounter a Facade when ordering from a catalog. The consumer calls one number and speaks with a customer service representative. The customer service representative acts as a Facade, providing an interface to the order fulfillment department, the billing department, and the shipping department
>
> ![[Facade Pattern/facade-example-realife.png]]
# Code Example

> [!expand-ui]- Computer Example (Simple)
> ```
> class CPU {
>     void start() {}
> }
>
> class Memory {
>     void load() {}
> }
>
> class Disk {
>     void read() {}
> }
>
> class ComputerFacade {
>     void start() {
>         new CPU().start();
>         new Memory().load();
>         new Disk().read();
>     }
> }
> ```
>
> usage
> ```
> new ComputerFacade().start();
> ```

> [!expand-ui]- Goldmine Example (Complex)
> Let's take our goldmine example from above. Here we have the dwarven mine worker hierarchy. First, there's a base class <code><font style="color: rgb(122,134,154);">DwarvenMineWorker</font></code>:
> ```
> @Slf4j
> public abstract class DwarvenMineWorker {
>
>   public void goToSleep() {
>     LOGGER.info("{} goes to sleep.", name());
>   }
>
>   public void wakeUp() {
>     LOGGER.info("{} wakes up.", name());
>   }
>
>   public void goHome() {
>     LOGGER.info("{} goes home.", name());
>   }
>
>   public void goToMine() {
>     LOGGER.info("{} goes to the mine.", name());
>   }
>
>   private void action(Action action) {
>     switch (action) {
>       case GO_TO_SLEEP:
>         goToSleep();
>         break;
>       case WAKE_UP:
>         wakeUp();
>         break;
>       case GO_HOME:
>         goHome();
>         break;
>       case GO_TO_MINE:
>         goToMine();
>         break;
>       case WORK:
>         work();
>         break;
>       default:
>         LOGGER.info("Undefined action");
>         break;
>     }
>   }
>
>   public void action(Action... actions) {
>     Arrays.stream(actions).forEach(this::action);
>   }
>
>   public abstract void work();
>
>   public abstract String name();
>
>   enum Action {
>     GO_TO_SLEEP, WAKE_UP, GO_HOME, GO_TO_MINE, WORK
>   }
> }
> ```
>
> Then we have the concrete dwarf classes <code>DwarvenTunnelDigger</code>, <code>DwarvenGoldDigger</code> and <code>DwarvenCartOperator</code>:
> ```
> @Slf4j
> public class DwarvenTunnelDigger extends DwarvenMineWorker {
>
>   @Override
>   public void work() {
>     LOGGER.info("{} creates another promising tunnel.", name());
>   }
>
>   @Override
>   public String name() {
>     return "Dwarven tunnel digger";
>   }
> }
>
> @Slf4j
> public class DwarvenGoldDigger extends DwarvenMineWorker {
>
>   @Override
>   public void work() {
>     LOGGER.info("{} digs for gold.", name());
>   }
>
>   @Override
>   public String name() {
>     return "Dwarf gold digger";
>   }
> }
>
> @Slf4j
> public class DwarvenCartOperator extends DwarvenMineWorker {
>
>   @Override
>   public void work() {
>     LOGGER.info("{} moves gold chunks out of the mine.", name());
>   }
>
>   @Override
>   public String name() {
>     return "Dwarf cart operator";
>   }
> }
> ```
>
> To operate all these goldmine workers we have the <code>DwarvenGoldmineFacade</code>:
> ```
> public class DwarvenGoldmineFacade {
>
>   private final List<DwarvenMineWorker> workers;
>
>   public DwarvenGoldmineFacade() {
>       workers = List.of(
>             new DwarvenGoldDigger(),
>             new DwarvenCartOperator(),
>             new DwarvenTunnelDigger());
>   }
>
>   public void startNewDay() {
>     makeActions(workers, DwarvenMineWorker.Action.WAKE_UP, DwarvenMineWorker.Action.GO_TO_MINE);
>   }
>
>   public void digOutGold() {
>     makeActions(workers, DwarvenMineWorker.Action.WORK);
>   }
>
>   public void endDay() {
>     makeActions(workers, DwarvenMineWorker.Action.GO_HOME, DwarvenMineWorker.Action.GO_TO_SLEEP);
>   }
>
>   private static void makeActions(Collection<DwarvenMineWorker> workers,
>       DwarvenMineWorker.Action... actions) {
>     workers.forEach(worker -> worker.action(actions));
>   }
> }
> ```
>
> Now let's use the facade:
> ```
> var facade = new DwarvenGoldmineFacade();
> facade.startNewDay();
> facade.digOutGold();
> facade.endDay();
> ```
>
> Program output:
> ```
> // Dwarf gold digger wakes up.
> // Dwarf gold digger goes to the mine.
> // Dwarf cart operator wakes up.
> // Dwarf cart operator goes to the mine.
> // Dwarven tunnel digger wakes up.
> // Dwarven tunnel digger goes to the mine.
> // Dwarf gold digger digs for gold.
> // Dwarf cart operator moves gold chunks out of the mine.
> // Dwarven tunnel digger creates another promising tunnel.
> // Dwarf gold digger goes home.
> // Dwarf gold digger goes to sleep.
> // Dwarf cart operator goes home.
> // Dwarf cart operator goes to sleep.
> // Dwarven tunnel digger goes home.
> // Dwarven tunnel digger goes to sleep.
> ```

> [!expand-ui]- Cartesian and Polar Coordinates (Complex)
> ```
> // 1. Subsystem
> class PointCartesian {
>     private double x, y;
>     public PointCartesian(double x, double y ) {
>         this.x = x;
>         this.y = y;
>     }
>
>     public void  move( int x, int y ) {
>         this.x += x;
>         this.y += y;
>     }
>
>     public String toString() {
>         return "(" + x + "," + y + ")";
>     }
>
>     public double getX() {
>         return x;
>     }
>
>     public double getY() {
>         return y;
>     }
> }
>
> // 1. Subsystem
> class PointPolar {
>     private double radius, angle;
>
>     public PointPolar(double radius, double angle) {
>         this.radius = radius;
>         this.angle = angle;
>     }
>
>     public void  rotate(int angle) {
>         this.angle += angle % 360;
>     }
>
>     public String toString() {
>         return "[" + radius + "@" + angle + "]";
>     }
> }
>
> // 1. Desired interface: move(), rotate()
> class Point {
>     // 2. Design a "wrapper" class
>     private PointCartesian pointCartesian;
>
>     public Point(double x, double y) {
>         pointCartesian = new PointCartesian(x, y);
>     }
>
>     public String toString() {
>         return pointCartesian.toString();
>     }
>
>     // 4. Wrapper maps
>     public void move(int x, int y) {
>         pointCartesian.move(x, y);
>     }
>
>     public void rotate(int angle, Point o) {
>         double x = pointCartesian.getX() - o.pointCartesian.getX();
>         double y = pointCartesian.getY() - o.pointCartesian.getY();
>         PointPolar pointPolar = new PointPolar(Math.sqrt(x * x + y * y),Math.atan2(y, x) * 180 / Math.PI);
>         // 4. Wrapper maps
>         pointPolar.rotate(angle);
>         System.out.println("  PointPolar is " + pointPolar);
>         String str = pointPolar.toString();
>         int i = str.indexOf('@');
>         double r = Double.parseDouble(str.substring(1, i));
>         double a = Double.parseDouble(str.substring(i + 1, str.length() - 1));
>         pointCartesian = new PointCartesian(r*Math.cos(a*Math.PI/180) + o.pointCartesian.getX(),
>                 r*Math.sin(a * Math.PI / 180) + o.pointCartesian.getY());
>     }
> }
>
> class Line {
>     private Point o, e;
>     public Line(Point ori, Point end) {
>         o = ori;
>         e = end;
>     }
>
>     public void  move(int x, int y) {
>         o.move(x, y);
>         e.move(x, y);
>     }
>
>     public void  rotate(int angle) {
>         e.rotate(angle, o);
>     }
>
>     public String toString() {
>         return "origin is " + o + ", end is " + e;
>     }
> }
>
> public class FacadeDemo {
>     public static void main(String[] args) {
>         // 3. Client uses the Facade
>         Line lineA = new Line(new Point(2, 4), new Point(5, 7));
>         lineA.move(-2, -4);
>         System.out.println( "after move:  " + lineA );
>         lineA.rotate(45);
>         System.out.println( "after rotate: " + lineA );
>         Line lineB = new Line( new Point(2, 1), new Point(2.866, 1.5));
>         lineB.rotate(30);
>         System.out.println("30 degrees to 60 degrees: " + lineB);
>     }
> }
> ```
>
> output
> ```
> after move:  origin is (0.0,0.0), end is (3.0,3.0)
>   PointPolar is [4.242640687119285@90.0]
> after rotate: origin is (0.0,0.0), end is (2.5978681687064796E-16,4.242640687119285)
>   PointPolar is [0.9999779997579947@60.000727780827376]
> 30 degrees to 60 degrees: origin is (2.0,1.0), end is (2.499977999677324,1.8660127018922195)
> ```
# Code Structure
![[Facade Pattern/facade-structure.png|700]]
# Comparisons

> [!expand]- Click here to expand...
> ![[Facade Pattern vs Mediator Pattern#^excerpt]]
>
> ![[Abstract Factory Pattern vs Facade Pattern#^excerpt]]
>
> ![[Adapter Pattern vs Facade Pattern#^excerpt]]
>
> ![[Facade Pattern vs Flyweight Pattern#^excerpt]]
>
> ![[Facade Pattern vs Singleton Pattern#^excerpt]]
# Resources
- [https://java-design-patterns.com/patterns/facade/](https://java-design-patterns.com/patterns/facade/)
