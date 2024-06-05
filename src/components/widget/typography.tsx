import { cn } from "@/lib/shadcn/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
const typographyVariants = cva("", {
	variants: {
		variant: {
			h1: "text-4xl font-extrabold tracking-tight",
			h2: "text-3xl font-semibold tracking-tight",
			h3: "text-2xl font-semibold tracking-tight",
			h4: "text-xl font-semibold tracking-tight",
			lead: "text-xl text-muted-foreground",
			large: "text-lg font-semibold",
			p: "text-base font-normal",
			small: "text-sm font-medium leading-none",
			caption: "text-xs font-medium leading-none",
		},
		fontColor: {
			black: "text-gray-900",
			white: "text-white",
			"black-muted": "text-gray-500",
			"white-muted": "text-white opacity-80",
		},
	},
	defaultVariants: {
		variant: "p",
		fontColor: "black",
	},
});

export interface TypographyProps
	extends React.ParamHTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
	({ className, variant, fontColor, ...props }, ref) => {
		return (
			<p
				className={cn(typographyVariants({ variant, fontColor, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);

Typography.displayName = "Typography";
export { Typography };
