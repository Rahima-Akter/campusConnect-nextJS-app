import Link from "next/link";

export default function Colleges() {
  const colleges = [
    {
      name: "Stanford University",
      rating: "4.8",
      admissionDate: "May 15",
      researchWorks: "2500",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCavfLS8oIqZ-fy6cf1KkCGTbYdkKAmepg8zy6IwuSLHo63_megDH3BT1XGJBM_PdLXr1C2VFwbCmSCUzWDG-hfXPW169DMogZBP6agK4NHIocGiYFYczD6otrq5yIPkOWyv9QiQUvQeJ9c-0n58LhMdWqUtgjk34B1qQXJuxqiskzKbGqGuBqLhy8V2RYfjC-3ijUYlmu-1k8adWen_t9zu4PpszHv4LJEUeBewlp9-_n67sajGLCnDTFv-gva-X0diVoY-o9MJpI",
    },
    {
      name: "Massachusetts Institute of Technology",
      rating: "4.7",
      admissionDate: "April 20",
      researchWorks: "2200",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAksh4tviNA4E5NaMpC8SYVt_Cio5y8zSNacLklUZaIY5QAntCsMASuqWKNanzst9CaxyzopbQs0XgP6i3i_FakY2K7xYWA92nz6IQE9-QtRhyD00DkWr6wjiApvRVa_4GcyqoohMDPumxBeeL7LhQB2nk6VsM9rLi3xhVufq08srxAUcEg2HMatWmDJEbtjYNryE6junw0SWDDIqhZr4_rBbnITKumShV3SnVp4xMB9edWCaXM8v3J0_5KYRF1nQquyW-mjpoLqlU",
    },
    {
      name: "California Institute of Technology",
      rating: "4.9",
      admissionDate: "June 10",
      researchWorks: "2800",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDjGl-Aq22zsukjeLRC9XvHq3r1qzmIhGyWZ2Z7YFaTsONRpIZd9v_gEI0bwxyrPge1lpP1LjMNoytSmXI9x5VwYSSny0OHsnT0s1PYJCI0c8Wfks3yWVNafEPK5oSBrrdF2eCBizH--hm5EKRh_JvnPD2IVOU0DKUJKo-qrUMZJWMbK0cTLJ6qpWmy4siyADRHzpuofUzP6kLj8QmVM_hh7qQ4z-yaQjwybfDhoEjG-E1r5fM9zgaoOl-dEwnn199Fyg9QEIeMosQ",
    },
    {
      name: "Harvard University",
      rating: "4.6",
      admissionDate: "March 25",
      researchWorks: "2000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCCl_HKtAYq8hLKlp9Kd4uewO66v37vPGpHsqY-A1V6PNRYI5suyc-0mgc8GwtDwH-NlC7RzIE_l3ylhdjm0MeehOc-x_dMrYXeLRVwGtNJt99h78rIV4jgbMQWeWXj9IIvicBSxdJT8p2Td8vHCBAmRdZpF8go6mzJt6jDDQ_N3OJDQrprYTFmqYFwF3bCnKNmTkzrIDznvotPBrDc4UgDwxaCVtqocI-EArfqJ_Po_OsMwlRo566C74cAesxYZ7obogF8qEVP_PA",
    },
    {
      name: "Princeton University",
      rating: "4.7",
      admissionDate: "July 5",
      researchWorks: "2300",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkxmZ6Gvl2yDiyp1d13i64JtD1E2WaqYznKOTrB6vIACEYJtDmC8n0cviU8bTUfJ81YyF3vQf-cvHPK012C-zuyLQ-mBO1iLpgQ5ahuGysM4W1TF0xNqsAmp9vjE9fVHBqIi_hKs_JjhxkajhKNbGlNIIEyc8AedzmcZiJhgkDP8b4VIXJ0gUCxHuMBs14D1Zk3vWOIzZj0oAKIZ1S0mJaaRUHCIfiWY-_hi_I7bACu6KU-dLZUIH6GcICxJhU-xpR1BZHHqdzOJs",
    },
    {
      name: "Yale University",
      rating: "4.5",
      admissionDate: "August 1",
      researchWorks: "1800",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAiZBGJURbcoZMu45x_mYmoIJKMDg34M3CQIQGDAIs1PPaw5axFLwj2ZmMvhIwL3MWRYmKqJMj8fW373W80kSW6S4SqQ6zeIbYZtNhkry1eO1q6r3B20jzS9s3npA5FfyYup6blMHJTcNMOL6m0pJXj4i9j7JOrN8quDBOpdps-fn2wRAZ0wcPVJSjMvAfDsF_T74SPEiqsoF1Wsj6WiNuBPxE5klMfl8xokGjrV5Ax44Y8h6a8Rqoc2aAJK0q2YXqOz_37GjFR3ZA",
    },
  ];

  return (
    <Link href=''>
      <div className="px-4 lg:px-6 lg:pb-5 lg:pt-3 py-2">
        <div className="">
          {/* Header */}
          <div className="p-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Colleges
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Explore top colleges and find the perfect fit for your academic
              journey.
            </p>
          </div>

          {/* College Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-2 gap-4 p-4">
            {colleges.map((college, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:scale-105 duration-300 transition-all cursor-pointer shadow-md"
              >
                {/* College Image */}
                <div
                  className="w-full lg:h-32 h-40 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url('${college.image}')` }}
                ></div>

                {/* College Info */}
                <div className="px-2 pb-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {college.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {college.rating} • Admission Date: {college.admissionDate} •{" "}
                    {college.researchWorks} Research Works
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {/* <div className="flex justify-end px-4 py-3">
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors">
        View More
      </button>
    </div> */}
        </div>
      </div>
    </Link>
  );
}
