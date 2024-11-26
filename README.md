# design-patterns
Examples repository for design patterns study


## Links
https://refactoring.guru/design-patterns \
https://dev.to/alexmercedcoder/oop-design-patterns-in-javascript-3i98


## What is a design pattern
Design patterns are typical solutions to common problems
in software design. Each pattern is like a blueprint
that you can customize to solve a particular
design problem in your code.


## Types of design patterns
- Creational(object creation, help in flexibility and reusability of code)
- Structural(explain how to assemble objects and classes into larger structures)
- Behavioral(communication between objects, how objects interact)

## Complexity
- Idioms (basic and low level, only to a single language)
- Architectural patterns (high level, can be applied to multiple languages, used to define the overall structure of the software)


## Examples

### Creational

#### Singleton
- Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
Example: [Singleton](src/creational/singleton/Singleton.ts)

#### Builder
- Builder is a creational design pattern that lets you construct a complex object step by step. And a pattern like Director allows you to execute repetitive construction types.
Example: [Builder](src/creational/builder/Builder.ts)

#### Factory Method
- Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
Example: [Factory Method](src/creational/factory-method/FactoryMethod.ts)

#### Abstract Factory
- Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
Example: [Abstract Factory](src/creational/abstract-factory/AbstractFactory.ts)
