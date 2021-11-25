export type Policy = {
	id: string;
	customer: [
		{
			firstName: string;
			lastName: string;
			dateOfBirth: string;
		}
	];
	provider: string;
	insuranceType: string;
	status: string;
	policyNumber: string;
	startDate: string;
	endDate: string;
	createdAt: string;
};
