import React from 'react'

type Lang='vi'|'en'

const Arrow=()=> <span className="diagram-arrow" aria-hidden="true">→</span>

export function AsIsBpmn({lang}:{lang:Lang}){
  const vi=lang==='vi'
  const lanes=[
    [vi?'Ứng viên':'Candidate',[vi?'Tìm thông tin tuyển dụng':'Find recruitment information',vi?'Gửi hồ sơ ứng tuyển':'Submit application']],
    [vi?'Kênh tiếp nhận':'Intake channels',[vi?'Website / Email / Trực tiếp':'Website / Email / Direct',vi?'Hồ sơ đi qua nhiều kênh':'Applications across channels']],
    ['HR',[vi?'Tiếp nhận & tổng hợp hồ sơ':'Receive & consolidate applications',vi?'Sàng lọc / xử lý':'Screen / process',vi?'Phản hồi kết quả':'Communicate result']]
  ] as [string,string[]][]
  return <div className="artifact-card"><div className="artifact-head"><div><p className="eyebrow">BPMN / AS-IS</p><h3>{vi?'Quy trình tuyển dụng hiện tại — bản rút gọn':'Current recruitment process — simplified'}</h3></div><span className="artifact-badge">PROCESS</span></div><div className="bpmn-board">{lanes.map(([lane,steps],li)=><div className="bpmn-lane" key={lane}><div className="lane-name">{lane}</div><div className="lane-flow">{steps.map((s,i)=><React.Fragment key={s}><div className="bpmn-task">{s}</div>{i<steps.length-1&&<Arrow/>}</React.Fragment>)}</div>{li<lanes.length-1&&<div className="lane-handoff">↓</div>}</div>)}</div><p className="artifact-note">{vi?'Portfolio abstraction: tập trung vào điểm nghẽn quản lý dữ liệu sau khi hồ sơ được tiếp nhận, thay vì sao chép nguyên sơ đồ khóa luận.':'Portfolio abstraction focused on the data-management bottleneck after application intake rather than reproducing the thesis diagram verbatim.'}</p></div>
}

export function UseCaseOverview({lang}:{lang:Lang}){
  const vi=lang==='vi'
  const groups=[
    [vi?'Ứng viên':'Candidate',[vi?'Tìm kiếm công việc':'Search jobs',vi?'Quản lý hồ sơ':'Manage profile',vi?'Ứng tuyển':'Apply for job',vi?'Theo dõi / hủy ứng tuyển':'Track / cancel application',vi?'Nhận kết quả':'Receive result']],
    ['HR',[vi?'Quản lý tin tuyển dụng':'Manage job postings',vi?'Thiết lập tiêu chí ưu tiên':'Configure priority criteria',vi?'Xem / lọc ứng viên':'View / filter candidates',vi?'Đánh giá độ phù hợp':'Evaluate fit',vi?'Cập nhật kết quả':'Update result']],
    ['Admin',[vi?'Quản lý tài khoản':'Manage accounts',vi?'Quản lý danh mục':'Manage categories',vi?'Quản trị dữ liệu hệ thống':'Administer system data']]
  ] as [string,string[]][]
  return <div className="artifact-card"><div className="artifact-head"><div><p className="eyebrow">USE CASE / SCOPE</p><h3>{vi?'Use Case tổng quan theo Actor':'Actor-based Use Case Overview'}</h3></div><span className="artifact-badge">SCOPE</span></div><div className="uc-overview">{groups.map(([actor,cases])=><div className="uc-actor" key={actor}><div className="actor-pill">{actor}</div><div className="uc-system">{cases.map(c=><div className="uc-oval" key={c}>{c}</div>)}</div></div>)}</div></div>
}

export function DetailedUseCase({lang}:{lang:Lang}){
  const vi=lang==='vi'
  const rows=[
    ['ID','UC11'],
    [vi?'Tên':'Name',vi?'Ứng tuyển công việc':'Apply for Job'],
    ['Actor',vi?'Ứng viên':'Candidate'],
    [vi?'Mục tiêu':'Goal',vi?'Gửi yêu cầu ứng tuyển cho công việc phù hợp đã chọn.':'Submit an application request for a selected job.'],
    [vi?'Điều kiện trước':'Preconditions',vi?'Đã đăng nhập · Email đã xác minh · Công việc tồn tại.':'Logged in · Email verified · Job exists.'],
    [vi?'Luồng chính':'Main flow',vi?'Xem công việc → Chọn ứng tuyển → Hệ thống tạo yêu cầu ứng tuyển → Lưu → Thông báo thành công.':'View job → Choose Apply → System creates application request → Save → Success notification.'],
    [vi?'Ngoại lệ':'Exception',vi?'Email chưa xác minh → không thể sử dụng chức năng ứng tuyển.':'Email not verified → Apply action is unavailable.'],
    [vi?'Kết quả':'Result',vi?'Yêu cầu ứng tuyển được lưu và có thể được theo dõi trong hệ thống.':'Application request is stored and can be tracked in the system.']
  ]
  return <div className="artifact-card"><div className="artifact-head"><div><p className="eyebrow">DETAILED USE CASE</p><h3>UC11 — {vi?'Ứng tuyển công việc':'Apply for Job'}</h3></div><span className="artifact-badge">BEHAVIOUR</span></div><div className="uc-spec">{rows.map(([k,v])=><div key={k}><span>{k}</span><p>{v}</p></div>)}</div></div>
}

export function ActivityApply({lang}:{lang:Lang}){
  const vi=lang==='vi'
  const steps=[vi?'Mở chi tiết công việc':'Open job detail',vi?'Chọn Ứng tuyển':'Select Apply',vi?'Kiểm tra email đã xác minh?':'Email verified?',vi?'Tạo yêu cầu ứng tuyển':'Create application request',vi?'Lưu hồ sơ ứng tuyển':'Save application',vi?'Thông báo thành công':'Show success']
  return <div className="artifact-card"><div className="artifact-head"><div><p className="eyebrow">ACTIVITY DIAGRAM</p><h3>{vi?'Luồng hoạt động UC11 — Ứng tuyển':'UC11 Activity — Apply for Job'}</h3></div><span className="artifact-badge">FLOW</span></div><div className="activity-flow"><div className="event-node">●</div>{steps.map((s,i)=><React.Fragment key={s}><div className={i===2?'activity-node decision-node':'activity-node'}>{s}</div>{i===2&&<div className="decision-exception"><span>{vi?'Không':'No'} → {vi?'Dừng & yêu cầu xác minh email':'Stop & require email verification'}</span><span>{vi?'Có':'Yes'} ↓</span></div>}{i<steps.length-1&&<div className="vertical-arrow">↓</div>}</React.Fragment>)}<div className="event-node end-node">●</div></div></div>
}

export function SequenceApply({lang}:{lang:Lang}){
  const vi=lang==='vi'
  const actors=[vi?'Ứng viên':'Candidate','UI / Web','Application Service','Database']
  const messages=[
    [0,1,vi?'Chọn Ứng tuyển':'Select Apply'],
    [1,2,vi?'Gửi yêu cầu ứng tuyển':'Submit application request'],
    [2,2,vi?'Kiểm tra điều kiện':'Validate preconditions'],
    [2,3,vi?'Tạo & lưu application':'Create & save application'],
    [3,2,vi?'Lưu thành công':'Saved'],
    [2,1,vi?'Trả kết quả':'Return result'],
    [1,0,vi?'Hiển thị thông báo':'Show confirmation']
  ] as [number,number,string][]
  return <div className="artifact-card"><div className="artifact-head"><div><p className="eyebrow">SEQUENCE DIAGRAM</p><h3>{vi?'Tương tác hệ thống khi ứng tuyển':'System interaction for Apply for Job'}</h3></div><span className="artifact-badge">INTERACTION</span></div><div className="sequence-board"><div className="sequence-actors">{actors.map(a=><div key={a}><b>{a}</b><span className="lifeline"/></div>)}</div><div className="sequence-messages">{messages.map(([from,to,label],i)=><div className="seq-message" key={label} style={{'--from':from,'--to':to} as React.CSSProperties}><span className="seq-index">{i+1}</span><span className="seq-label">{label}</span><span className="seq-line">→</span></div>)}</div></div></div>
}

export function SimplifiedERD({lang}:{lang:Lang}){
  const vi=lang==='vi'
  const entities=[
    ['User',['id','name','email','role','province_id']],
    ['Job',['id','user_id','title','category_id','province_id','gender','age_from / age_to']],
    ['Job Request',['id','user_id','job_id','status']],
    ['Priority',['job_id','age','gender','province','category','language','certificate']],
    ['Category',['id','name']],['Language',['id','name']],['Province',['id','name']]
  ] as [string,string[]][]
  return <div className="artifact-card"><div className="artifact-head"><div><p className="eyebrow">ERD / DATA MODEL</p><h3>{vi?'Mô hình dữ liệu tuyển dụng rút gọn':'Simplified recruitment data model'}</h3></div><span className="artifact-badge">DATA</span></div><div className="erd-grid">{entities.map(([name,fields])=><div className={`entity-box entity-${name.toLowerCase().replace(' ','-')}`} key={name}><b>{name}</b>{fields.map(f=><span key={f}>{f}</span>)}</div>)}</div><div className="erd-relations"><span>User 1—N Job</span><span>User 1—N Job Request</span><span>Job 1—N Job Request</span><span>Job 1—1 Priority</span><span>Job N—1 Category / Province</span></div><p className="artifact-note">{vi?'Bản portfolio giữ các bảng và quan hệ cốt lõi để thể hiện logic nghiệp vụ; không trình bày toàn bộ schema triển khai.':'The portfolio view keeps the core tables and relationships needed to communicate business logic rather than exposing the full implementation schema.'}</p></div>
}

export function AnalysisArtifacts({lang}:{lang:Lang}){
  const vi=lang==='vi'
  return <div className="analysis-artifacts"><div className="artifact-intro"><p className="eyebrow">REQUIREMENT TRACE</p><h3>{vi?'Một requirement được theo dõi xuyên suốt từ Use Case đến dữ liệu':'One requirement traced from Use Case to data'}</h3><p>{vi?'UC11 được dùng làm ví dụ để cho thấy cách yêu cầu nghiệp vụ được đặc tả, mô hình hóa luồng xử lý, mô tả tương tác hệ thống và liên kết với dữ liệu lưu trữ.':'UC11 is used to show how a business requirement is specified, modeled as a process, translated into system interaction and connected to stored data.'}</p></div><DetailedUseCase lang={lang}/><div className="artifact-pair"><ActivityApply lang={lang}/><SequenceApply lang={lang}/></div><SimplifiedERD lang={lang}/></div>
}
