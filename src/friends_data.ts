// 友链数据类型定义
export interface Friend {
	name: string;
	url: string;
	avatar: string;
	description: string;
}

// 友链数据
export const friends: Friend[] = [
	{
		name: "Remik1r3n Blog",
		url: "blog.remiki.ren",
		avatar: "https://s2.loli.net/2025/09/19/dJtaOl2fVGKUb8n.jpg",
		description: "Remi 的 Blog",
	},
];
