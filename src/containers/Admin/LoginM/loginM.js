import react, {Component} from 'react';

export const LoginM =() =>{
{
    return ( <section className="section container">
    <div className="columns is-centered">
      <div className="column is-half">
        <form>
          <div className="field">
            <label className="label">อีเมล์</label>
            <div className="control">
              <input className="input" type="email" name="email" />
            </div>
          </div>

          <div className="field">
            <label className="label">รหัสผ่าน</label>
            <div className="control">
              <input className="input" type="password" name="password" />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">เข้าสู่ระบบ</button>
            </div>
            <div className="control">
              <button className="button is-text">ยกเลิก</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
    )
}
}