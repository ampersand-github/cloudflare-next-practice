import { Typography } from "@/components/widget/typography";
import { cn } from "@/lib/shadcn/utils";
import type React from "react";

export const Header = async () => {
	return (
		<header
			className={cn(
				"h-12",
				"px-6",
				"m-0",
				"flex items-center justify-start",
				"bg-gray-700",
			)}
		>
			{/* 左サイド */}
			<Typography variant={"h3"} fontColor={"white"}>
				Logo
			</Typography>

			{/* 中央サイド */}
			<div className={"flex-1"} />

			{/* 右サイド */}
			<Typography variant={"small"} fontColor={"black"}>
				muted
			</Typography>
		</header>
	);
};
