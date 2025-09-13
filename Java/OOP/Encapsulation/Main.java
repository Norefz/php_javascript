package Encapsulation;

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student(erln, 1, 672924, 3.55);
        s1.PrintInfo();
        Student s2 = new Student("", 130,673383, 3);
        s2.PrintInfo();
        s2.setName("Anthy");
	s2.PrintInfo();
    }
    }
}
