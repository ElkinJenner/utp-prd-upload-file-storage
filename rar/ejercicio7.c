#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("El programa esta activo y ejecutando una tarea (looping o calculando)...\n");
    printf("--- Esperando la interrupcion de teclado (pulsar Enter) ---\n");
    
    // Esta funcion bloquea la ejecucion del programa hasta que el usuario pulsa una tecla.
    // Esto simula que el programa ha sido 'detenido' o 'interrumpido'
    // en su flujo normal por la necesidad de una entrada externa.
    getchar();

    printf("\nInterrupcion manejada: Se ha detectado la pulsacion de tecla.\n");
    printf("El programa ha reanudado su ejecucion normal y ahora va a terminar.\n");
    
    // Opcional: una pausa para verlo en algunos entornos.
    system("sleep 1"); 

    return 0;
}