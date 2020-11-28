import { Die, Result, IDieResultMap } from 'interfaces-and-types/roll.interface'
export const dieResultMap: IDieResultMap = {
  [Die.Boost]: {
    [1]: [Result.Blank],
    [2]: [Result.Blank],
    [3]: [Result.Success],
    [4]: [Result.Success, Result.Advantage],
    [5]: [Result.Advantage, Result.Advantage],
    [6]: [Result.Advantage],
  },
  [Die.Setback]: {
    [1]: [Result.Blank],
    [2]: [Result.Blank],
    [3]: [Result.Failure],
    [4]: [Result.Failure],
    [5]: [Result.Threat],
    [6]: [Result.Threat],
  },
  [Die.Ability]: {
    [1]: [Result.Blank],
    [2]: [Result.Success],
    [3]: [Result.Success],
    [4]: [Result.Success, Result.Success],
    [5]: [Result.Advantage],
    [6]: [Result.Advantage],
    [7]: [Result.Success, Result.Advantage],
    [8]: [Result.Advantage, Result.Advantage],
  },
  [Die.Difficulty]: {
    [1]: [Result.Blank],
    [2]: [Result.Failure],
    [3]: [Result.Failure, Result.Failure],
    [4]: [Result.Threat],
    [5]: [Result.Threat],
    [6]: [Result.Threat],
    [7]: [Result.Threat, Result.Threat],
    [8]: [Result.Failure, Result.Threat],
  },
  [Die.Proficiency]: {
    [1]: [Result.Blank],
    [2]: [Result.Success],
    [3]: [Result.Success],
    [4]: [Result.Success, Result.Success],
    [5]: [Result.Success, Result.Success],
    [6]: [Result.Advantage],
    [7]: [Result.Success, Result.Advantage],
    [8]: [Result.Success, Result.Advantage],
    [9]: [Result.Success, Result.Advantage],
    [10]: [Result.Success, Result.Success],
    [11]: [Result.Success, Result.Success],
    [12]: [Result.Triumph],
  },
  [Die.Challenge]: {
    [1]: [Result.Blank],
    [2]: [Result.Failure],
    [3]: [Result.Failure],
    [4]: [Result.Failure, Result.Failure],
    [5]: [Result.Failure, Result.Failure],
    [6]: [Result.Threat],
    [7]: [Result.Threat],
    [8]: [Result.Failure, Result.Threat],
    [9]: [Result.Failure, Result.Threat],
    [10]: [Result.Threat, Result.Threat],
    [11]: [Result.Threat, Result.Threat],
    [12]: [Result.Despair],
  },
}