function threeSum(arr, target) {
// write your code here
  arr.sort((a,b) =>a-b);
	let closetSum=infinity;
	for(let i=0;i<arr.length-2;i++){
		let left=i+1;
		let right=arr.length-1;
		while(left<right){
			let sum=arr[i]+arr[left]+arr[right];
			if(Math.abs(sum-target)<Math.abs(closetSum-target)){
				closetSum=sum;
			}
			if(sum<target){
				left++;
			}
			else if(sum>target){
				right--;
			}
			else{
				return closetSum;
			}
		}
	}
	return closetSum;
}

module.exports = threeSum;

