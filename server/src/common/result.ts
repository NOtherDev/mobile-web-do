export class Result {
    public get isFail(): boolean { return !this.isSuccess };

    static success(): Result {
        return new Result(true);
    }

    static fail(errors: string[]): Result {
        return new Result(false, errors);
    }

    private constructor(public isSuccess, public errors = [] as string[]) {
    }
}