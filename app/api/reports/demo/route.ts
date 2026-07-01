
import { NextResponse } from "next/server";
export async function POST(){return NextResponse.json({ok:true,report:{id:"DTR-24071",type:"Operations Risk Brief",groundingScore:98,sections:["Executive Summary","Key Facts","Vendor Onboarding Risks","Open Questions","Recommended Next Steps"],citations:["DOC-02 §4","MOM-01 p.2","CON-03 §7"]},events:["Parsed seeded documents","Chunked 290 passages","Retrieved evidence","Generated report","Citation check passed"]})}
