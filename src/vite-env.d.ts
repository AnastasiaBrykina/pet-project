/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*&as=picture' {
  const picture: {
    img: { src: string; w: number; h: number }
    sources: Record<string, string>
  }
  export default picture
}
