export function timeAsString(time: number) {
  return `${zeroFill(2, Math.floor(time / 60))}:${zeroFill(2, time % 60)}`
}

export function timeAsNumber(time: string) {
  const result = /(\d{2}):(\d{2})/.exec(time)
  return result ? parseInt(result[1]) * 60 + parseInt(result[2]) : 0
}

export function zeroFill(w: number, n: number) {
  w -= n.toString().length
  return w > 0 ? '0'.repeat(w) + n : n + ''
}
