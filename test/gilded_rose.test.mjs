import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("foo 2", () => {
    const gildedRose = new Shop([new Item("foo", -3, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-4);
    expect(items[0].quality).to.equal(18);
  });

  test("Backstage passes to a TAFKAL80ETC concert 1", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(22);
  });

  test("Backstage passes to a TAFKAL80ETC concert 2", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(60);
  });

  test("Backstage passes to a TAFKAL80ETC concert 3", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(19);
    expect(items[0].quality).to.equal(31);
  });

  test("Backstage passes to a TAFKAL80ETC concert 4", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 100)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(19);
    expect(items[0].quality).to.equal(100);
  });

  test("Backstage passes to a TAFKAL80ETC concert 5", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(23);
  });

  test("Backstage passes to a TAFKAL80ETC concert 6", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 90)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(90);
  });

  test("Backstage passes to a TAFKAL80ETC concert 7", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(6);
    expect(items[0].quality).to.equal(42);
  });

  test("Backstage passes to a TAFKAL80ETC concert 8", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(19);
    expect(items[0].quality).to.equal(31);
  });

  test("Backstage passes to a TAFKAL80ETC concert 9", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -2, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-3);
    expect(items[0].quality).to.equal(0);
  });

  test("Aged Brie 1", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -3, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-4);
    expect(items[0].quality).to.equal(22);
  });

  test("Aged Brie 2", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(31);
  });

  test("Aged Brie 3", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(60);
  });

  test("Sulfuras, Hand of Ragnaros 1", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(80);
  });
});

describe("Gilded Rose - Mutation", () => {
  test("Backstage passes to a TAFKAL80ETC concert 1", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 2", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 3", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 4", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 5", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(11);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 6", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 7", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 8", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(6);
    expect(items[0].quality).to.equal(50);
  });

  test("Backstage passes to a TAFKAL80ETC concert 9", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(22);
  });

  test("Backstage passes to a TAFKAL80ETC concert 10", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(21);
  });

  test("Backstage passes to a TAFKAL80ETC concert 11", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(11);
    expect(items[0].quality).to.equal(21);
  });

  test("Backstage passes to a TAFKAL80ETC concert 12", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(23);
  });

  test("Backstage passes to a TAFKAL80ETC concert 13", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(22);
  });

  test("Backstage passes to a TAFKAL80ETC concert 14", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(6);
    expect(items[0].quality).to.equal(22);
  });

  test("foo 1", () => {
    const gildedRose = new Shop([new Item("foo", 50, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(49);
    expect(items[0].quality).to.equal(0);
  });

  test("foo 2", () => {
    const gildedRose = new Shop([new Item("foo", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(28);
  });

  test("foo 3", () => {
    const gildedRose = new Shop([new Item("foo", -1, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(28);
  });

  test("foo 4", () => {
    const gildedRose = new Shop([new Item("foo", 1, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(29);
  });

  test("foo 5", () => {
    const gildedRose = new Shop([new Item("foo", -1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(47);
  });

  test("foo 6", () => {
    const gildedRose = new Shop([new Item("foo", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(48);
  });

  test("foo 6", () => {
    const gildedRose = new Shop([new Item("foo", -1, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(49);
  });

  test("Sulfuras, Hand of Ragnaros 1", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(80);
  });

  test("Sulfuras, Hand of Ragnaros 2", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(80);
  });

  test("Sulfuras, Hand of Ragnaros 2", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(80);
  });

  test("Aged Brie 1", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(50);
  });

  test("Aged Brie 2", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(50);
  });

  test("Aged Brie 3", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(51);
  });

  test("null item", () => {
    const gildedRose = new Shop();
    expect(gildedRose.items.length).to.equal(0);
  });

});

describe("Conjured items", () => {
  test("Conjured 1", () => {
    const gildedRose = new Shop([new Item("Conjured", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  test("Conjured 2", () => {
    const gildedRose = new Shop([new Item("Conjured", -3, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-4);
    expect(items[0].quality).to.equal(16);
  });

  test("Conjured 4", () => {
    const gildedRose = new Shop([new Item("Conjured", 50, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(49);
    expect(items[0].quality).to.equal(0);
  });

  test("Conjured 5", () => {
    const gildedRose = new Shop([new Item("Conjured", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(26);
  });

  test("Conjured 6", () => {
    const gildedRose = new Shop([new Item("Conjured", -1, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(26);
  });

  test("Conjured 7", () => {
    const gildedRose = new Shop([new Item("Conjured", 1, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(28);
  });

  test("Conjured 8", () => {
    const gildedRose = new Shop([new Item("Conjured", -1, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(45);
  });

  test("Conjured 9", () => {
    const gildedRose = new Shop([new Item("Conjured", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(46);
  });

  test("Conjured 10", () => {
    const gildedRose = new Shop([new Item("Conjured", -1, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(47);
  });
});
