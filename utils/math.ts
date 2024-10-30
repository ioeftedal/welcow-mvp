
// Generalisation of Choquet integral

export function choquetIntegral_3(
  // TODO verify that below code is correct
  S_6: number,
  S_7: number,
  S_8: number,
  my_6: number,
  my_7: number,
  my_8: number,
  my_67: number,
  my_68: number,
  my_78: number
): number {
  if (S_6 <= S_7 && S_7 <= S_8) {
    return S_6 + (S_7 - S_6) * my_78 + (S_8 - S_7) * my_8
  } else if (S_6 <= S_8 && S_8 <= S_7) {
    return S_6 + (S_8 - S_6) * my_78 + (S_7 - S_8) * my_7
  } else if (S_7 <= S_6 && S_6 <= S_8) {
    return S_7 + (S_6 - S_7) * my_68 + (S_8 - S_6) * my_8
  } else if (S_7 <= S_8 && S_8 <= S_6) {
    return S_7 + (S_8 - S_7) * my_68 + (S_6 - S_8) * my_6
  } else if (S_8 <= S_6 && S_6 <= S_7) {
    return S_8 + (S_6 - S_8) * my_67 + (S_7 - S_6) * my_7
  } else {
    return S_8 + (S_7 - S_8) * my_67 + (S_6 - S_7) * my_6
  }
}

export function choquetIntegral_4(
  // TODO verify that below code is correct
  S_a: number,
  S_b: number,
  S_c: number,
  S_d: number,
  my_a: number,
  my_b: number,
  my_c: number,
  my_d: number,
  my_ab: number,
  my_ac: number,
  my_ad: number,
  my_bc: number,
  my_bd: number,
  my_cd: number,
  my_abc: number,
  my_abd: number,
  my_acd: number,
  my_bcd: number
): number {
  // Section 1 (S_a smallest)
  if (S_a <= S_b && S_b <= S_c && S_c <= S_d) {
    return (
      S_a +
      (S_b - S_a) * my_bcd +
      (S_c - S_b) * my_cd +
      (S_d - S_c) * my_d
    )
  } else if (S_a <= S_b && S_b <= S_d && S_d <= S_c) {
    return (
      S_a +
      (S_b - S_a) * my_bcd +
      (S_d - S_b) * my_cd +
      (S_c - S_d) * my_c
    )
  } else if (S_a <= S_c && S_c <= S_b && S_b <= S_d) {
    return (
      S_a +
      (S_c - S_a) * my_bcd +
      (S_b - S_c) * my_bd +
      (S_d - S_b) * my_d
    )
  } else if (S_a <= S_c && S_c <= S_d && S_d <= S_b) {
    return (
      S_a +
      (S_c - S_a) * my_bcd +
      (S_d - S_c) * my_bd +
      (S_b - S_d) * my_b
    )
  } else if (S_a <= S_d && S_d <= S_b && S_b <= S_c) {
    return (
      S_a +
      (S_d - S_a) * my_bcd +
      (S_b - S_d) * my_bc +
      (S_c - S_b) * my_c
    )
  } else if (S_a <= S_d && S_d <= S_c && S_c <= S_b) {
    return (
      S_a +
      (S_d - S_a) * my_bcd +
      (S_c - S_d) * my_bc +
      (S_b - S_c) * my_b
    )
  }
  // Section 2 (S_b smallest)
  else if (S_b <= S_a && S_a <= S_c && S_c <= S_d) {
    return (
      S_b +
      (S_a - S_b) * my_acd +
      (S_c - S_a) * my_cd +
      (S_d - S_c) * my_d
    )
  } else if (S_b <= S_a && S_a <= S_d && S_d <= S_c) {
    return (
      S_b +
      (S_a - S_b) * my_acd +
      (S_d - S_a) * my_cd +
      (S_c - S_d) * my_c
    )
  } else if (S_b <= S_c && S_c <= S_a && S_a <= S_d) {
    return (
      S_b +
      (S_c - S_b) * my_acd +
      (S_a - S_c) * my_ad +
      (S_d - S_a) * my_d
    )
  } else if (S_b <= S_c && S_c <= S_d && S_d <= S_a) {
    return (
      S_b +
      (S_c - S_b) * my_acd +
      (S_d - S_c) * my_ad +
      (S_a - S_d) * my_a
    )
  } else if (S_b <= S_d && S_d <= S_a && S_a <= S_c) {
    return (
      S_b +
      (S_d - S_b) * my_acd +
      (S_a - S_d) * my_ac +
      (S_c - S_a) * my_c
    )
  } else if (S_b <= S_d && S_d <= S_c && S_c <= S_a) {
    return (
      S_b +
      (S_d - S_b) * my_acd +
      (S_c - S_d) * my_ac +
      (S_a - S_c) * my_a
    )
  }
  // Section 3 (S_c smallest)
  else if (S_c <= S_a && S_a <= S_b && S_b <= S_d) {
    return (
      S_c +
      (S_a - S_c) * my_abd +
      (S_b - S_a) * my_bd +
      (S_d - S_b) * my_d
    )
  } else if (S_c <= S_a && S_a <= S_d && S_d <= S_b) {
    return (
      S_c +
      (S_a - S_c) * my_abd +
      (S_d - S_a) * my_bd +
      (S_b - S_d) * my_b
    )
  } else if (S_c <= S_b && S_b <= S_a && S_a <= S_d) {
    return (
      S_c +
      (S_b - S_c) * my_abd +
      (S_a - S_b) * my_ad +
      (S_d - S_a) * my_d
    )
  } else if (S_c <= S_b && S_b <= S_d && S_d <= S_a) {
    return (
      S_c +
      (S_b - S_c) * my_abd +
      (S_d - S_b) * my_ad +
      (S_a - S_d) * my_a
    )
  } else if (S_c <= S_d && S_d <= S_a && S_a <= S_b) {
    return (
      S_c +
      (S_d - S_c) * my_abd +
      (S_a - S_d) * my_ab +
      (S_b - S_a) * my_b
    )
  } else if (S_c <= S_d && S_d <= S_b && S_b <= S_a) {
    return (
      S_c +
      (S_d - S_c) * my_abd +
      (S_b - S_d) * my_ab +
      (S_a - S_b) * my_a
    )
  }
  // Section 4 (S_d smallest)
  else if (S_d <= S_a && S_a <= S_b && S_b <= S_c) {
    return (
      S_d +
      (S_a - S_d) * my_abc +
      (S_b - S_a) * my_bc +
      (S_c - S_b) * my_c
    )
  } else if (S_d <= S_a && S_a <= S_c && S_c <= S_b) {
    return (
      S_d +
      (S_a - S_d) * my_abc +
      (S_c - S_a) * my_bc +
      (S_b - S_d) * my_b
    )
  } else if (S_d <= S_b && S_b <= S_a && S_a <= S_c) {
    return (
      S_d +
      (S_b - S_d) * my_abc +
      (S_a - S_b) * my_ac +
      (S_c - S_a) * my_c
    )
  } else if (S_d <= S_b && S_b <= S_c && S_c <= S_a) {
    return (
      S_d +
      (S_b - S_d) * my_abc +
      (S_c - S_b) * my_ac +
      (S_a - S_c) * my_a
    )
  } else if (S_d <= S_c && S_c <= S_a && S_a <= S_b) {
    return (
      S_d +
      (S_c - S_d) * my_abc +
      (S_a - S_c) * my_ab +
      (S_b - S_a) * my_b
    )
  } else {
    return (
      S_d +
      (S_c - S_d) * my_abc +
      (S_b - S_c) * my_ab +
      (S_a - S_b) * my_a
    )
  }
}
