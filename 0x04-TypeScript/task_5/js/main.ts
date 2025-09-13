// task_5/js/main.ts

// Interface for MajorCredits
export interface MajorCredits {
  credits: number;
  // brand property to make this type nominal (unique)
  __brand: 'major';
}

// Interface for MinorCredits
export interface MinorCredits {
  credits: number;
  // brand property to make this type nominal (unique)
  __brand: 'minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',
  };
}
