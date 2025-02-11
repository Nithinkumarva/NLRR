export const modules = [
  {
    id: 'python',
    name: 'Python',
    description: 'Learn Python programming from basics to advanced concepts',
    stars: 0,
    maxStars: 5,
    completed: false,
    lessons: [
      {
        id: 'py1',
        title: 'Variables and Types',
        description: 'Learn about Python variables and data types',
        code: 'name = "John"\nage = 25\nprint(f"Hello {name}, you are {age} years old")',
        task: 'Create a variable called "score" with value 100 and print it',
        solution: 'score = 100\nprint(score)',
        completed: false,
        mcq: [
          {
            question: 'What is the correct way to declare a variable in Python?',
            options: [
              'var x = 5;',
              'x := 5;',
              'x = 5',
              'let x = 5;'
            ],
            correctAnswer: 2,
            explanation: 'In Python, variables are declared by simply assigning a value using the = operator.'
          },
          {
            question: 'Which of the following is a valid integer declaration in Python?',
            options: [
              'int x = 5;',
              'x = int(5)',
              'x = 5',
              'integer x = 5'
            ],
            correctAnswer: 2,
            explanation: 'Python automatically determines the type. Simply assigning a number creates an integer.'
          }
        ]
      },
      {
        id: 'py2',
        title: 'Basic Operations',
        description: 'Learn arithmetic operations in Python',
        code: 'x = 10\ny = 5\nsum = x + y\nprint(f"Sum: {sum}")',
        task: 'Calculate and print the product of numbers 7 and 8',
        solution: 'product = 7 * 8\nprint(product)',
        completed: false,
        mcq: [
          {
            question: 'What is the output of: 15 / 4',
            options: [
              '3',
              '3.75',
              '3.0',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'In Python 3, division (/) always returns a float number.'
          },
          {
            question: 'Which operator is used for exponentiation in Python?',
            options: [
              '^',
              '**',
              'pow()',
              'exp()'
            ],
            correctAnswer: 1,
            explanation: 'The ** operator is used for exponentiation in Python. For example: 2**3 equals 8.'
          }
        ]
      },
      {
        id: 'py3',
        title: 'Conditional Statements',
        description: 'Learn if-else statements in Python',
        code: 'age = 18\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
        task: 'Write a program to check if a number is positive or negative',
        solution: 'num = -5\nif num > 0:\n    print("Positive")\nelse:\n    print("Negative")',
        completed: false,
        mcq: [
          {
            question: 'Which of the following is the correct syntax for an if statement in Python?',
            options: [
              'if (x > 0) { }',
              'if x > 0:\n    print("positive")',
              'if x > 0 then print("positive")',
              'if (x > 0): print("positive");'
            ],
            correctAnswer: 1,
            explanation: 'Python uses a colon (:) and indentation to define code blocks.'
          },
          {
            question: 'What is the output of: x = 5\nif x > 3: print("A")\nelif x > 4: print("B")',
            options: [
              'A',
              'B',
              'Both A and B',
              'No output'
            ],
            correctAnswer: 0,
            explanation: 'Once the first condition is true (x > 3), the code block is executed and the elif is skipped.'
          }
        ]
      }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    description: 'Learn Java programming fundamentals',
    stars: 0,
    maxStars: 5,
    completed: false,
    lessons: [
      {
        id: 'java1',
        title: 'Basic Syntax',
        description: 'Learn Java basic syntax and structure',
        code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}',
        task: 'Create a Java program that prints your name',
        solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Your Name");\n    }\n}',
        completed: false,
        mcq: [
          {
            question: 'Which of the following is the correct main method declaration in Java?',
            options: [
              'public void main(String[] args)',
              'public static void main()',
              'public static void main(String[] args)',
              'public static main(String[] args)'
            ],
            correctAnswer: 2,
            explanation: 'The main method in Java must be public, static, void, and accept a String array parameter.'
          },
          {
            question: 'What is the correct way to print text to the console in Java?',
            options: [
              'print("Hello");',
              'System.print("Hello");',
              'console.log("Hello");',
              'System.out.println("Hello");'
            ],
            correctAnswer: 3,
            explanation: 'System.out.println() is the standard way to print output to the console in Java.'
          }
        ]
      },
      {
        id: 'java2',
        title: 'Variables and Data Types',
        description: 'Learn Java variables and primitive data types',
        code: 'int age = 25;\nString name = "John";\nSystem.out.println(name + " is " + age + " years old");',
        task: 'Create variables for storing a person\'s height (double) and weight (int)',
        solution: 'double height = 1.75;\nint weight = 70;\nSystem.out.println("Height: " + height + "m, Weight: " + weight + "kg");',
        completed: false,
        mcq: [
          {
            question: 'Which of these is not a primitive data type in Java?',
            options: [
              'int',
              'boolean',
              'String',
              'char'
            ],
            correctAnswer: 2,
            explanation: 'String is a class in Java, not a primitive data type.'
          },
          {
            question: 'What is the default value of an int variable in Java?',
            options: [
              '0',
              'null',
              '1',
              'undefined'
            ],
            correctAnswer: 0,
            explanation: 'The default value for numeric primitive types like int is 0 in Java.'
          }
        ]
      },
      {
        id: 'java3',
        title: 'Control Flow',
        description: 'Learn if statements and loops in Java',
        code: 'int score = 85;\nif (score >= 60) {\n    System.out.println("Passed");\n} else {\n    System.out.println("Failed");\n}',
        task: 'Write a program that prints numbers from 1 to 5 using a for loop',
        solution: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}',
        completed: false,
        mcq: [
          {
            question: 'Which loop is best suited for iterating a fixed number of times?',
            options: [
              'while loop',
              'do-while loop',
              'for loop',
              'foreach loop'
            ],
            correctAnswer: 2,
            explanation: 'The for loop is ideal when you know the exact number of iterations needed.'
          },
          {
            question: 'What is the output of: for(int i=0; i<3; i++) { System.out.print(i); }',
            options: [
              '123',
              '012',
              '001',
              '111'
            ],
            correctAnswer: 1,
            explanation: 'The loop starts at 0, prints each number, and stops before reaching 3.'
          }
        ]
      }
    ]
  }
];