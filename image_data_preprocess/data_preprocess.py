import json
import numpy as np
from matplotlib.patches import Polygon
from shapely.geometry import Polygon

from numpy import *


def main():
    image_data = json.load(open("./image_data/image_data_kor.json", 'r', encoding='utf-16'))

    images = image_data['images']
    for img in images:
        ann = img['annotations']

        for obj in ann:
            obj_list = obj['segmentation']

            x_points = []
            y_points = []

            # calculate area
            for i in obj_list:
                i[0] = float(i[0])
                i[1] = float(i[1])

                x_points.append(i[0])
                y_points.append(i[1])

            obj_tuple = [tuple(l) for l in obj_list]

            polygon = Polygon(tuple(obj_tuple))

            obj['area'] = polygon.area

            # calculate bbox
            bbox_point = [[min(x_points), min(y_points)], [max(x_points), min(y_points)], [max(x_points), max(y_points)]
                          , [min(x_points), max(y_points)]]
            bbox = np.array(bbox_point).reshape((4, 2)).tolist()

            obj['bbox'] = bbox

        sorted_by_point = sorted(ann, key=lambda k: [k['bbox'][0][1], k['bbox'][0][0]])

        # calculate duplicates
        objects = []

        object_counted = []

        for i in sorted_by_point:
            objects.append(i['category'])
            object_count = objects.count(i['category'])

            object_counted.append(object_count)

        count = 0

        for i in sorted_by_point:
            i['duplicates_num'] = object_counted[count]
            count = count + 1

        # getting category list
        cat_list = []

        for i in sorted_by_point:
            if i['duplicates_num'] != 1:
                cat_list.append(i['category']+str(i['duplicates_num']))
            else:
                cat_list.append(i['category'])

        sorted_ann = sorted(sorted_by_point, key=lambda k: k['area'], reverse=True)

        img['sorted_by_point'] = cat_list

        img['annotations'] = sorted_ann

    with open('result_kor.json', 'w') as fp:
        json.dump(image_data, fp, sort_keys=False, indent=1, separators=(',', ': '), ensure_ascii=False)


if __name__ == '__main__':
    main()

