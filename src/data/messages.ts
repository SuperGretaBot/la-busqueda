export function getMotivationalMessage(found: number, total: number): string {
  const percent = (found / total) * 100;
  const remaining = total - found;

  if (found === 0) return 'Muevalo gorda, tengo hambre!';
  if (percent <= 20) return 'Muevalo gorda, tengo hambre!';
  if (percent <= 40) return 'Primer peaje...';
  if (percent <= 60) return 'Movete olda movete 🎵';
  if (percent <= 80) return 'Yo soy lechona y tengo aguante 🎶';
  if (remaining === 1) return 'Eh eh eheheh, eh eh eheheh 👀';
  if (percent <= 90) return 'Epaaa, ya casi...';
  if (percent < 100) return 'Eh eh eheheh, eh eh eheheh 👀';
  return 'VAMO A CENAAAAR, SIUUUUUU 🔥';
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
