import { LoaderArgs, redirect } from "@remix-run/node";

export function loader(args: LoaderArgs){
    const searchParams = new URL(args.request.url).searchParams;
    const redirectUrl = searchParams.get('url')?.toString();
    if(!redirectUrl){
        throw new Response('Page Not Found',{
			status: 404,
		});
    }
    return redirect(redirectUrl);
}