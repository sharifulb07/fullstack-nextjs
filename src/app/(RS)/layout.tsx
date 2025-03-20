import Header from "@/components/Header";

export default function RSLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            {/* Header */}
            <Header />
            {children}
        </div>
    )
}