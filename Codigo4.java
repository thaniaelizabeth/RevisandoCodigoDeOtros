package com.generation;

import java.util.Scanner; // se importó Scanner 

public class Codigo4 {

	public static void main(String[] args) { // se agregó el main para poder imprimir en consola
		Scanner s = new Scanner(System.in); // Los datos de entrada serán de la consola

		System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		String j1 = s.nextLine();

		System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); // Sería jugador 2
		// Scanner s2 = new Scanner(System.in); // Ya no sería necesario otro
		String j2 = s.nextLine();

		// Le agregué un if para validar los datos de entrada
		if ((j1.equals("tijeras") || j1.equals("piedra") || j1.equals("papel"))
				&& (j2.equals("tijeras") || j2.equals("piedra") || j2.equals("papel"))) { 
			if (j1.equals(j2)) { // para strings se ocupa equals
				System.out.println("Empate");
			} else {
				int g = 2;
				switch (j1) {
				case "piedra":
					if (j2.equals("tijeras")) { // Se cambia a equals
						g = 1;
					}
					break; // Se agregó break

				case "papel":
					if (j2.equals("piedra")) { // se cambió a equals
						g = 1;
					} // Llave de cierre de if
					break;// Se agregó break

				case "tijeras": // tijeras
					if (j2.equals("papel")) {
						g = 1;
					}
					break;
				default:
					g = 2; // Si son los casos contrarios el ganador será el jugador 2
				}
				System.out.println("Gana el jugador " + g);
			}
		} else
			System.out.println("Elemento no válido, intenta de nuevo colocando piedra, papel o tijeras"); //else correspondiente al if agregado de validacion de entrada
		
		s.close(); // Se agregó el método close
	}

}