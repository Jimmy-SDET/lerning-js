# Learning JavaScript

## Lección 1 - Memoria y Execution Context

### Regla 1
Los tipos primitivos se copian por valor.

### Regla 2
Los objetos se asignan por referencia.

### Regla 3
Cada llamada a una función crea un Execution Context.

### Regla 4
Cuando una función termina, su Execution Context desaparece.

### Regla 5
El Call Stack contiene las funciones que están ejecutándose en ese momento.

## Scope Chain

Cuando JavaScript necesita una variable:

1. Busca en el contexto actual.
2. Si no la encuentra, busca en el entorno léxico donde fue declarada la función.
3. Repite el proceso hasta llegar al contexto global.
4. Si no la encuentra, lanza un ReferenceError.