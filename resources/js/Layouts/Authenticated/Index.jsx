import Sidebar from "@/Layouts/Authenticated/Sidebar"
import Topbar from "@/Layouts/Authenticated/Topbar"


export default function Authenticated({auth, children}) {
    return (
        <>
        <div className="mx-auto max-w-screen hidden lg:block">
            {/* START:sidebar */}
            <Sidebar />
            {/* End:sidebar */}
            
            {/* start:konten */}
            <div className="ml-[300px] px-[50px]">
                <div className="py-10 flex flex-col gap-[50px]">
                {/* start:topbar */}
                <Topbar name={auth.user.name}/>
                {/* End:topbar */}
                {/* start:content */}
              
                <main>{children}</main>
                </div>
            </div>
            {/* End:konten */}
        </div>

        <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
        <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
            Sorry, this page only supported on 1024px screen or above
        </div>
    </div>
        </>
    )
}