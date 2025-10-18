#include <stdio.h>
#include <string.h>

int main() {
    FILE *f;
    char texto[100];

    printf("Ingrese texto (max. 99 caracteres): ");
    
    if (fgets(texto, sizeof(texto), stdin) == NULL) {
        // Manejo de error si la lectura falla
        printf("\nError al leer la entrada.\n");
        return 1;
    }
    size_t len = strlen(texto);
    if (len > 0 && texto[len - 1] == '\n') {
        texto[len - 1] = '\0';
    }

    f = fopen("datos.txt", "w");
    
    if (f == NULL) {
        printf("Error al abrir el archivo 'datos.txt'.\n");
        return 1;
    }
    fprintf(f, "%s", texto);

    fclose(f);

    printf("El texto ha sido guardado exitosamente en 'datos.txt'.\n");

    return 0;
}