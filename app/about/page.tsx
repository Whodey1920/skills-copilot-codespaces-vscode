import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">About Raymond Ornelas</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Raymond Ornelas"
            width={300}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">
            Raymond Ornelas is a highly experienced attorney dedicated to providing exceptional legal representation to
            clients throughout California. With over two decades of practice, Raymond has established himself as a
            respected figure in the legal community.
          </p>
          <p className="mb-4">
            After graduating from [Law School Name] with honors, Raymond began his career at a prestigious law firm in
            Los Angeles. He quickly distinguished himself through his sharp legal mind, unwavering dedication to his
            clients, and his ability to navigate complex legal challenges.
          </p>
          <p className="mb-4">
            In [Year], Raymond founded the Raymond Ornelas Law Firm with a mission to provide personalized, high-quality
            legal services to individuals and families in need. His areas of expertise include personal injury, criminal
            defense, family law, and estate planning.
          </p>
          <p>
            Raymond is known for his compassionate approach to client relationships and his aggressive representation in
            the courtroom. He believes in open communication with his clients and works tirelessly to achieve the best
            possible outcomes in every case he handles.
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Affiliations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>California State Bar Association</li>
          <li>American Bar Association</li>
          <li>Los Angeles County Bar Association</li>
          <li>California Attorneys for Criminal Justice</li>
        </ul>
      </section>
    </div>
  )
}
