interface Dictionary<T> {
    [key: string]: T;
}

declare module '@ckeditor/ckeditor5-build-classic' {
    const ClassicEditorBuild: any;

    export = ClassicEditorBuild;
}
type UUID = string;