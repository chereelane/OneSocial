import NavBar from "@/app/components/NavBar";
import {noto_sans} from "@/app/font";


export default function Home() {
  return (
      <>
          <NavBar/>
          <main className={`${noto_sans.className} flex gap-16 m-6`}>
              <div className="trending flex w-fit flex-col ">
                  <h3>Trending</h3>
                  <div className="video w-72 h-52 ">

                  </div>
              </div>
              <div className="feed w-full h-fit">
                  <h1>Feed</h1>
                  <div className="videos flex w-full h-full gap-4">
                      <div className="featuredVideo w-1/2">
                          Main
                      </div>
                      <div className="topVideos w-1/2">
                          Top
                      </div>
                  </div>

              </div>

          </main>
      </>
  );
}
