export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        break;
      } else if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = 0;
          break;
        }
        if (this.items[i].quality < 50) {
          if (this.items[i].sellIn < 5) {
            this.items[i].quality = this.items[i].quality + 3;
          } else if (this.items[i].sellIn < 10) {
            this.items[i].quality = this.items[i].quality + 2;
          } else {
            this.items[i].quality = this.items[i].quality + 1;
          }
          this.items[i].quality = Math.min(this.items[i].quality, 50);
        }
        break;
      } else if (this.items[i].name === "Aged Brie") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality + 1;
          }
          this.items[i].quality = Math.min(this.items[i].quality, 50);
          break;
        }
      } else {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
          if (this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality - 1;
          }
          this.items[i].quality = Math.max(this.items[i].quality, 0);
          break
        }
      }
    }

    return this.items;
  }
}
