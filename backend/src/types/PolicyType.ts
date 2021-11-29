export type Policy = {
	id: string;
	customer: {
		firstName: string;
		lastName: string;
		dateOfBirth: Date;
	};
	provider: string;
	insuranceType: string;
	status: string;
	policyNumber: string;
	startDate: Date;
	endDate: Date;
	createdAt: Date;
};
