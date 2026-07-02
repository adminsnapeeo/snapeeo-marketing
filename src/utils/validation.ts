export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isValidIndianPhone(value: string): boolean {
  const trimmed = value.trim()
  if (!trimmed) return true
  return /^(\+91[\s-]?)?[6-9]\d{9}$/.test(trimmed.replace(/\s/g, ''))
}
