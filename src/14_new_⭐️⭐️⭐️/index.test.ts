import { myNew } from '.';

function Person(this: any, name: string, age: number) {
  this.name = name;
  this.age = age;
}

Person.prototype.speak = function(msg: string) {
  console.log(`Person speak: ${msg}`);
};

describe('new', () => {
  it('my new', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const person = myNew(Person, 'zhangsan', 18);
    const person1 = myNew(Person, 'lisi', 20);

    expect(person.name).toBe('zhangsan');
    expect(person.age).toBe(18);
    person.speak(`I am ${person.name}, and ${person.age} years old`);

    expect(person1.name).toBe('lisi');
    expect(person1.age).toBe(20);
    person1.speak(`I am ${person1.name}, and ${person1.age} years old`);

    expect(consoleSpy.mock.calls[0][0]).toBe(
      'Person speak: I am zhangsan, and 18 years old'
    );
    expect(consoleSpy.mock.calls[1][0]).toBe(
      'Person speak: I am lisi, and 20 years old'
    );
  });
});
