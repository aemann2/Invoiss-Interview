// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
	id: string;
	name: 'test';
}

type Response = {
	id: string;
};

type Error = {
	message: string;
};

function isData(object: any): object is Data[] {
	// checking every item in the object
	for (let item of object) {
		if (!(typeof item.id === 'string' && item.name === 'test')) {
			return false;
		}
	}
	return true;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Response | Error>
) {
	const objArray = req.body;

	let newObjArray = objArray.map((item: any) => ({
		id: item.name,
	}));

	if (isData(objArray)) {
		res.status(200).json(newObjArray);
	} else {
		res.status(400).json({ message: 'Bad Request' });
	}
}
