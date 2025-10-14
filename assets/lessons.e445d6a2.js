import{s as i}from"./supabase.92ff816f.js";const m=async r=>{const{data:e,error:a}=await i.from("lessons").select("id, name, description, court_id, duration, coach, lesson_date, lesson_time, price, max_participants, coaches(name), players").eq("id",r);if(a)throw new Error(a.message);return e.map(t=>{const o=t.players?t.players.length:0,n=t.max_participants;return{...t,available_slots:n!==null?n-o:null}})},p=async r=>{const{data:e,error:a}=await i.from("lessons").select("id, club_id, court_id, coach, players, participants, lesson_date, lesson_time, price, coaches(name), clubs(name, latitude, longitude), courts(name), payment_orders(total_amount, payment_status, additional_items, is_full_payment)").eq("id",r).single();if(a)throw new Error(a.message);const s=e.players;let t=[];if((s==null?void 0:s.length)>0){const{data:o,error:n}=await i.from("players").select("user_id, first_name, last_name, photo_url").in("user_id",s);if(n)throw new Error(n.message);t=o}return{...e,playerDetails:t}},u=async r=>{const{data:e,error:a}=await i.from("players").select("user_id, photo_url").in("user_id",r);if(a)throw new Error(a.message);return e},d=async(r,e)=>{const{data:a,error:s}=await i.from("lessons").select(`
        id,
        lesson_date,
        lesson_time,
        duration,
        court_id,
        coach,
        name,
        lesson_type,
        max_participants,
        players,
        price,
        courts(name),
        coaches(name)
    `).eq("lesson_date",r).eq("club_id",e);if(s)throw new Error(s.message);return a.map(t=>({...t,end_time:l(t.lesson_time,t.duration),available_slots:t.max_participants?t.max_participants-(t.players?t.players.length:0):null}))},l=(r,e)=>{const[a,s]=r.split(":").map(Number),t=a*60+s+e,o=Math.floor(t/60),n=t%60;return`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`};export{u as a,p as b,d as f,m as g};
