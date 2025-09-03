// Introducation :- An algorithm is finite sequence of well-defined instructions that takes some input, performs a series of steps, and produces an output to solve a specific problem.
        //👉 Example:--- Problem: Find the largest number in a list.
            // Algorithm (Step by Step):-- 
                                        //1. Assume the first number is the largest.
                                        //2. Compare it with the next number.
                                        //3. If the next number is larger, update the "largest".
                                        //4. Repeat until the list ends.
                                        //5. Return the largest number.
            // This is a simple “Maximum Element Finding Algorithm

        //Properties of a Good Algorithm
            //  1. Input: It should accept input values (can be zero or more).
            //  2. Output: Must produce at least one output.
            //  3. Definiteness: Each step must be clear and unambiguous.
            //  4. Finiteness: It must finish in a finite number of steps.
            //  5. Effectiveness: Each step must be basic enough to be carried out in practice.

        //  Why Study Algorithms            
            // Efficiency: To solve problems faster and with less memory.
            // Scalability: Real-world problems deal with millions of users/data (Google Search, Maps, YouTube).
            // Problem-Solving Skills: Helps break big problems into smaller ones.
            // Core of Computer Science: Data structures + algorithms = backbone of programming.

        //🔹 Algorithm vs Program
                // Algorithm = Idea / logic (language independent).
                // Program = Implementation of that algorithm in a programming language (Python, C++, Java).


        // Priori Analysis vs Posteriori Testing
                // 1. Priori Analysis (Theoretical Analysis)
                        // * 👉 This is before running the program.
                        // * We analyze the algorithm mathematically.
                        // * We don’t depend on machine or compiler → only on logic.
                        // * The main focus is on time complexity and space complexity.
                        // * We express performance using asymptotic notations like O(n), Θ(n), Ω(n).

                // 2. Posteriori Testing (Experimental Analysis)
                        // * 👉 This is after running the program.
                        // * We implement the algorithm and test it on real machines.
                        // * We record:Actual execution time (depends on CPU, OS, compiler).
                        // * Actual memory usage.
                        // * Useful to check if the theoretical results match real-world behavior.

                //  Characteristics of an Algorithm
	
	                // 1.Input
                            //  An algorithm should accept zero or more inputs.
                            //  Inputs are taken from a defined set of values.
                            //  Example: Searching algorithm → input is an array + target element.

	                // 2. Output
                            //  An algorithm must produce at least one output.
                            //  Output is the solution/result for the given problem.
                            //  Example: Sorting algorithm → output is a sorted array.

	                // 3.Definiteness (Clarity)
                            //  Each step of the algorithm should be clear, precise, and unambiguous.
                            //  No step should be vague.
                            //  Example: Instead of “sort the array,” specify “compare two elements and swap if necessary.”
	
                    // 4.Finiteness
                            //  An algorithm must terminate after a finite number of steps.
                            //  It cannot go into an infinite loop.
                            //  Example: Binary Search finishes after at most log₂(n) comparisons.
	                
                    // 5.Effectiveness
                            //  Every step must be simple enough that it can be carried out in a finite amount of time using basic operations.
                            //  No overly complex or abstract step.
                            //  Example: “Add two numbers” is effective; “solve world hunger” is not.
	
                    // 6.Generality
                            //  The algorithm should be applicable to a broad set of problems, not just one specific case.
                            //  Example: Quick Sort can sort any list of numbers, not just one particular array.

	                // 7.Correctness (sometimes listed as extra)
                            //  The algorithm must always give the right output for all valid inputs.
                            //  Example: A shortest path algorithm must always find the actual shortest path.

        // How to Analyze and Write an Algorithm :- 
	            // Step 1: Understand the Problem Clearly
                        //  Read the problem statement carefully.
                        //  Identify inputs (what’s given) and outputs (what’s required).
                        //  Clarify constraints (size of input, time limits, edge cases).

                // Step 2: Write the Algorithm (Step-by-Step Plan)
                        //  An algorithm is just a clear step sequence (language independent).
                        //  👉 Example: Maximum Element Algorithm
                        //  Start.Take input: a list of n numbers.
                        //  Assume the first number is the largest (say max).
                        //  Compare max with the next number.
                        //  If the next number is greater, update max.
                        //  Repeat step 4 for all numbers in the list.
                        //  After the loop ends, max contains the largest value.
                        //  Output max.
                        //  End.

                // Step 3: Represent (Optional)
                        // You can represent the algorithm in:
                                // * Pseudocode
                                // * Flowchart


                // Step 4: Analyze the Algorithm
                        // We analyze in two ways:
                                // 1. Time Complexity (Speed)
                                // Count basic operations (comparisons, assignments, loops).
                                // Express growth rate using Big-O notation.
                                // 📌 Example (Find Maximum):
                                // Loop runs (n-1) times → O(n).
                                // So time complexity = O(n).

                                // 2. Space Complexity (Memory)
                                // Count extra memory used.
                                //  📌 Example:
                                // Only one variable max is used → O(1).


                    // Step 5: Test the Algorithm
                            // Try small inputs, large inputs, edge cases.
                                    // Compare results with expected outputs.
