export default function isCryptSolution(crypt, solution) {
  const solutionMap = new Map(solution);
  const ecuation = [];

  crypt.forEach((word) => {
    let code = "";

    for (let index = 0; index < word.length; index++) {
      code = code.concat(solutionMap.get(word[index]));
    }

    ecuation.push(code);
  });

  const checkForCeros = () => {
    for (let index = 0; index < ecuation.length; index++) {
      if (ecuation.length > 1 && ecuation[0] === "0") return false;
    }

    return true;
  };

  return checkForCeros() && +ecuation[0] + +ecuation[1] === +ecuation[2];
}

export const testCase = (["AA", "AA", "AA"], [["A", "0"]]);
