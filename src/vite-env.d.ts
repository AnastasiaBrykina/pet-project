/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
	readonly VITE_CLIENT_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*&as=picture' {
	const picture: {
		img: { src: string; w: number; h: number };
		sources: Record<string, string>;
	};
	export default picture;
}
