import Employee from "./components/Employee";

function App() {
  const workers = [
        {
            name: "Phil Tiims",
            role: "Senior Software Engineer",
            experience: "7+ years",
            image: "https://content.groomedbyelereka.com/wp-content/uploads/2022/07/pexels-lara-jameson-9363131-scaled.jpg",
            id: 1
        },
        {
            name: "AK Joey",
            role: "Cyber Security",
            experience: "6+ years",
            image: "https://imgs.search.brave.com/s0UpODyi07tdRvWdC0OJ0r2p0V-TzRiGHAUK-furzeY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/NTEzOTk2NC9waG90/by9uZXcteW9yay1u/ZXcteW9yay1wcmlu/Y2UtYW1wb25zYWgt/b2YtbmV3LXlvcmst/Y2l0eS1wb3Nlcy1m/b3ItYS1wb3J0cmFp/dC1kdXJpbmctdGhl/LW1scy0yMDI1Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1j/VHJtVFVIdFZrVGpB/elA1SVB2RW1ZMFd1/NHFhVkNuR3o3VjNv/WUxFT1M4PQ",
            id: 2
        },
        {
            name: "JP Morgan", 
            role: "AI Engineer" ,
            experience:"13+ years",
            image: "https://imgs.search.brave.com/wi5sJF3t7YRQXLxycPOrWdCcctetkuxREjJVbixYCFg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92My50/YWlsd2luZGNzcy5j/b20vaW1nL2VyaW4t/bGluZGZvcmQuanBn",
            id: 3
        }
    ]

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {workers.map((worker) => (
          <Employee key={worker.id} {...worker} />
        ))}
      </div>
    </>
  )
}

export default App