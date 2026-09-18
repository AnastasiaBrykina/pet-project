/// <reference types="vite/client" />

declare module '*&as=picture' {
  const picture: {
    img: { src: string; w: number; h: number }
    sources: Record<string, string>
  }
  export default picture
}
