export function getMotivationalMessage(found: number, total: number): string {
  const percent = (found / total) * 100;

  if (found === 0) return '¡La aventura te espera! Empieza a buscar...';
  if (found === 1) return '¡Encontraste al primero! Esto apenas comienza...';
  if (found === 2) return '¡Vas por buen camino! Sigue explorando...';
  if (percent < 15) return '¡Gran inicio! Hay mucho por descubrir...';
  if (percent < 25) return '¡Sigues avanzando! Cada rincón esconde algo especial...';
  if (percent < 35) return '¡Ya llevas varios! Tu ojo de detective es increíble...';
  if (percent < 50) return '¡Casi la mitad! No hay escondite que se te resista...';
  if (percent < 60) return '¡Más de la mitad! Eres imparable...';
  if (percent < 70) return '¡Increíble progreso! Quedan pocos por encontrar...';
  if (percent < 80) return '¡Estás que arrasas! Ya casi los tienes todos...';
  if (percent < 90) return '¡Faltan muy poquitos! Puedes sentir el premio cerca...';
  if (percent < 100) return '¡Casi, casi! Unos pocos más y descubrirás la sorpresa...';
  return '¡LO LOGRASTE! Has encontrado a todos. Eres increíble.';
}

export function getCategoryMessage(found: number, total: number, category: 'hp' | 'mario'): string {
  const percent = (found / total) * 100;

  if (category === 'hp') {
    if (found === 0) return 'Los magos siguen escondidos...';
    if (percent < 50) return 'La magia está en el aire...';
    if (percent < 100) return '¡Hogwarts estaría orgulloso!';
    return '¡Mischief Managed! Todos encontrados.';
  }

  if (found === 0) return 'El Reino Champiñón te necesita...';
  if (percent < 50) return '¡Vamos por más monedas!';
  if (percent < 100) return '¡Power-up activado!';
  return '¡Level Complete! Todos encontrados.';
}
