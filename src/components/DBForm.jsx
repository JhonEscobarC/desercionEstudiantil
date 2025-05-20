import React from 'react'

const DBForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <label className="text-sm text-[#A0AEC0]">Database URI</label>
      <input
        type="text"
        placeholder="postgres://usuario:clave@host:puerto/db"
        className="p-3 bg-[#2A354A] rounded-md outline-none text-white"
      />
      <button className="bg-[#3B82F6] hover:bg-[#60A5FA] p-3 rounded-md transition">
        Conectar
      </button>
    </form>
  )
}

export default DBForm
