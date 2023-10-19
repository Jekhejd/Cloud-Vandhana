import java.util.Scanner;

public class pangram {
    public static boolean isPangram(String input) {
        // Convert the input to lowercase to make the check case-insensitive
        input = input.toLowerCase();

        // Create an array to keep track of the presence of each letter
        boolean[] alphabet = new boolean[26];

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabet[index] = true;
            }
        }

        // Check if all letters have been marked as present
        for (boolean letterPresent : alphabet) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence to check if it's a pangram: ");
        String input = scanner.nextLine();

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close(); // Close the scanner when done.
    }
}

