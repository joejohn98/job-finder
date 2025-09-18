const Jobpage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const jobId = (await params).id;
  return (
    <div>
      <h1 className="text-3xl font-bold">Job {jobId}</h1>
    </div>
  );
};

export default Jobpage;
