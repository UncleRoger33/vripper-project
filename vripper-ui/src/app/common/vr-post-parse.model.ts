export class VRPostParse {
  constructor(
    public threadId: string,
    public postId: string,
    public number: number,
    public title: string,
    public imageCount: number,
    public url: string,
    public previews: string[]
  ) {}
}

export class VRThreadParseState {
  constructor(public threadId: string, public state: string) {}
}