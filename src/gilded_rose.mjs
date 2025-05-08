import { it } from "vitest";

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
      switch (this.items[i].name) {
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
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
        case "Aged Brie":
          this.items[i].sellIn = this.items[i].sellIn - 1;
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (this.items[i].sellIn < 0) {
              this.items[i].quality = this.items[i].quality + 1;
            }
            this.items[i].quality = Math.min(this.items[i].quality, 50);
          }
          break;
        case "Conjured":
          this.items[i].sellIn = this.items[i].sellIn - 1;
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 2;
            if (this.items[i].sellIn < 0) {
              this.items[i].quality = this.items[i].quality - 2;
            }
            this.items[i].quality = Math.max(this.items[i].quality, 0);
          }
          break;
        default:
          this.items[i].sellIn = this.items[i].sellIn - 1;
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
            if (this.items[i].sellIn < 0) {
              this.items[i].quality = this.items[i].quality - 1;
            }
            this.items[i].quality = Math.max(this.items[i].quality, 0);
          }
          break;
      }
    }

    return this.items;
  }
}
