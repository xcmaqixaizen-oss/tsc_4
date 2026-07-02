const warna = {
  merah: "\x1b[31m",
  hijau: "\x1b[32m",
  kuning: "\x1b[33m",
  biru: "\x1b[34m",
  reset: "\x1b[0m",
};

class karakter {
    nama : string;
    hp : number;
    hpmax: number
    attack: number

    constructor ( nama:string, hp: number, attack: number){
        this.nama = nama;
        this.hp = hp;
        this.hpmax = hp;
        this.attack = attack;
    }

    get hidup(): boolean {
        return this.hp > 0;
    }

    serang(lawan: karakter): void {
        const demage = Math.floor(Math.random() * this.attack) + 5;
        lawan.hp = Math.max(0,lawan.hp-demage);
        console.log( console.log(`${warna.kuning}⚔️  ${this.nama} menyerang ${lawan.nama} sebesar ${demage} damage!${warna.reset}`))
    }
    
    barHp(): string {
    const panjang = 20;
    const isi = Math.round((this.hp / this.hpmax) * panjang);
    const kosong = panjang - isi;
    const warnaBar = this.hp > this.hpmax * 0.3 ? warna.hijau : warna.merah;
    return `${warnaBar}${"█".repeat(isi)}${warna.reset}${"░".repeat(kosong)} ${this.hp}/${this.hpmax}`;
  }

}

const hero = new karakter ("joker", 100 , 20);
const musuh = new karakter("Goblin Raksasa", 80, 15);

console.log(`${warna.biru}🎮 PERTARUNGAN DIMULAI: ${hero.nama} VS ${musuh.nama}${warna.reset}\n`);

let ronde = 1;

while (hero.hidup && musuh.hidup) {
    console.log(`--- Ronde ${ronde} ---`);

  hero.serang(musuh);
  console.log(`${musuh.nama}: ${musuh.barHp()}`);

  if (musuh.hidup) {
    musuh.serang(hero);
    console.log(`${hero.nama}: ${hero.barHp()}`);
  }

  console.log("");
  ronde++;
}

if (hero.hidup){
   console.log(`${warna.hijau}🏆 ${hero.nama} MENANG!${warna.reset}`);
} else {
   console.log(`${warna.merah}💀 ${musuh.nama} MENANG!${warna.reset}`);
}