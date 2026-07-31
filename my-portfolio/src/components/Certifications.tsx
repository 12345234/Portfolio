
import {certification, type Ceartification, type CertStatus } from "../data/portfolio"

const STATUS_CONFIG:
    Record<CertStatus, {color:string; bg:string; border:string}> = {
        '取得済み': { color:'var(--badge-amber)', bg:'#FBBF241A', border:'#FBBF244D' },
        '受験予定': { color:'var(--badge-sky)', bg:'#38BDF81A', border:'#38BDF84D' },
        '取得予定': { color:'var(--badge-indigo)', bg:'#818CF81A', border:'#818CF84D' },
        '学習中': { color:'var(--badge-orange)', bg:'#F0932F1A', border:'#F0932F4D' },
}

function StatusBadge({status} : {status: CertStatus})
{
    const cfg = STATUS_CONFIG[status]
    return (
        <span
            className="cert-status"
            style={{color:cfg.color, background: cfg.bg, borderColor: cfg.border}}
        >
            {status}
        </span>
    )
}

function CertRow({cert} : {cert: Ceartification})
{
    return(
        <div className="cert-row">
            <div className="cert-icon">📋</div>
            <div className="cert-main">
                <div className="cert-name-row">
                    <p className="cert-name">{cert.name}</p>
                    { cert.score && 
                        <span className="cert-score">{cert.score}</span>
                    }
                </div>
                <p className="cert-date">{cert.date}</p>
            </div>
            <div className="cert-meta">
                <span className="cert-category">{cert.category}</span>
            </div>
            <StatusBadge status={cert.status}/>
        </div>
    )
}



export default function Certifications()
{
    return(
        <section className="section" id="certifications">
            <div className="container">
                <h2 className="section-title">
                    <span>Certifications</span>
                </h2>
                <p className="section-sub">資格・実績</p>

                <div className="cert-list">
                    {certification.length > 0  &&
                      certification.map((cert,i)=>(
                        <CertRow key={i} cert={cert}/>
                    ))
                    }
                </div>

            </div>
        </section>
    )
}